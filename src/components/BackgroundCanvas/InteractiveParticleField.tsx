import React, { useEffect, useRef } from 'react';

export type ParticleMorphState = 'chaos' | 'data' | 'ai' | 'ml' | 'logic' | 'monogram';

interface PastelParticle {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  baseRadius: number;
}

interface Props {
  activeState?: ParticleMorphState;
}

export const InteractiveParticleField: React.FC<Props> = ({ activeState = 'chaos' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<PastelParticle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });
  const animFrameRef = useRef<number>(0);
  const currentStateRef = useRef<ParticleMorphState>(activeState);

  currentStateRef.current = activeState;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      updateTargets(currentStateRef.current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Warm, subdued ethereal pastel palette (low alpha to prevent text obstruction)
    const pastelColors = [
      'rgba(248, 231, 161, 0.18)', // Butter Yellow
      'rgba(255, 214, 192, 0.18)', // Soft Peach
      'rgba(201, 231, 245, 0.18)', // Powder Blue
      'rgba(220, 204, 245, 0.18)', // Lavender
      'rgba(244, 199, 217, 0.18)', // Soft Pink
      'rgba(205, 235, 216, 0.18)', // Mint
      'rgba(244, 165, 138, 0.15)', // Warm Coral
    ];

    const count = width < 768 ? 16 : 28;
    const particles: PastelParticle[] = [];

    for (let i = 0; i < count; i++) {
      const size = Math.random() * (width < 768 ? 8 : 14) + 6;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        tx: Math.random() * width,
        ty: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size,
        baseRadius: size,
        color: pastelColors[i % pastelColors.length],
        alpha: Math.random() * 0.15 + 0.1,
      });
    }

    particlesRef.current = particles;

    function updateTargets(state: ParticleMorphState) {
      const cx = width / 2;
      const cy = height / 2;
      const p = particlesRef.current;
      const n = p.length;

      if (state === 'chaos') {
        for (let i = 0; i < n; i++) {
          p[i].tx = Math.random() * width;
          p[i].ty = Math.random() * height;
        }
      } else {
        // Geometric word formation for DATA, AI, ML, LOGIC, AG
        const text = state === 'monogram' ? 'AG' : state.toUpperCase();
        const off = document.createElement('canvas');
        off.width = 360;
        off.height = 180;
        const octx = off.getContext('2d');
        if (octx) {
          octx.fillStyle = '#000';
          octx.fillRect(0, 0, 360, 180);
          octx.fillStyle = '#fff';
          octx.font = 'bold 80px sans-serif';
          octx.textAlign = 'center';
          octx.textBaseline = 'middle';
          octx.fillText(text, 180, 90);
          const imgData = octx.getImageData(0, 0, 360, 180).data;
          const validPoints: { x: number; y: number }[] = [];
          for (let y = 0; y < 180; y += 10) {
            for (let x = 0; x < 360; x += 10) {
              const idx = (y * 360 + x) * 4;
              if (imgData[idx] > 180) {
                validPoints.push({ x: (x - 180) * 1.8, y: (y - 90) * 1.8 });
              }
            }
          }
          for (let i = 0; i < p.length; i++) {
            if (validPoints.length > 0) {
              const pt = validPoints[i % validPoints.length];
              p[i].tx = cx + pt.x + (Math.random() - 0.5) * 8;
              p[i].ty = cy + pt.y + (Math.random() - 0.5) * 8;
            }
          }
        }
      }
    }

    updateTargets(activeState);

    let time = 0;
    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const p = particlesRef.current;

      for (let i = 0; i < p.length; i++) {
        const pt = p[i];

        // Soft organic spring lerp
        pt.x += (pt.tx - pt.x) * 0.03;
        pt.y += (pt.ty - pt.y) * 0.03;

        // Gentle floating drift
        pt.x += Math.sin(time + i * 0.3) * 0.3;
        pt.y += Math.cos(time + i * 0.25) * 0.3;

        // Playful mouse repulsion
        if (mouse.active) {
          const dx = pt.x - mouse.x;
          const dy = pt.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 120;
          if (dist < maxDist && dist > 0) {
            const force = (maxDist - dist) / maxDist;
            pt.x += (dx / dist) * force * 12;
            pt.y += (dy / dist) * force * 12;
          }
        }

        // Draw soft pastel ambient discs WITHOUT sharp distracting borders
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.fill();
      }

      // Very subtle ethereal connector lines
      ctx.strokeStyle = 'rgba(216, 206, 190, 0.10)';
      ctx.lineWidth = 1;
      for (let i = 0; i < p.length; i += 2) {
        for (let j = i + 1; j < Math.min(i + 3, p.length); j++) {
          const dx = p[i].x - p[j].x;
          const dy = p[i].y - p[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < 18000) {
            ctx.beginPath();
            ctx.moveTo(p[i].x, p[i].y);
            ctx.lineTo(p[j].x, p[j].y);
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Update targets when state prop changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const p = particlesRef.current;
    if (!p.length) return;

    if (activeState === 'chaos') {
      for (let i = 0; i < p.length; i++) {
        p[i].tx = Math.random() * width;
        p[i].ty = Math.random() * height;
      }
    } else {
      const text = activeState === 'monogram' ? 'AG' : activeState.toUpperCase();
      const off = document.createElement('canvas');
      off.width = 360;
      off.height = 180;
      const octx = off.getContext('2d');
      if (octx) {
        octx.fillStyle = '#000';
        octx.fillRect(0, 0, 360, 180);
        octx.fillStyle = '#fff';
        octx.font = 'bold 80px sans-serif';
        octx.textAlign = 'center';
        octx.textBaseline = 'middle';
        octx.fillText(text, 180, 90);
        const imgData = octx.getImageData(0, 0, 360, 180).data;
        const validPoints: { x: number; y: number }[] = [];
        for (let y = 0; y < 180; y += 8) {
          for (let x = 0; x < 360; x += 8) {
            const idx = (y * 360 + x) * 4;
            if (imgData[idx] > 180) {
              validPoints.push({ x: (x - 180) * 1.8, y: (y - 90) * 1.8 });
            }
          }
        }
        for (let i = 0; i < p.length; i++) {
          if (validPoints.length > 0) {
            const pt = validPoints[i % validPoints.length];
            p[i].tx = cx + pt.x + (Math.random() - 0.5) * 8;
            p[i].ty = cy + pt.y + (Math.random() - 0.5) * 8;
          }
        }
      }
    }
  }, [activeState]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
