import React, { useEffect, useRef } from 'react';

export const VolatilitySurfaceViz: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = 320);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 320;
    };
    window.addEventListener('resize', handleResize);

    let frame = 0;
    let animId = 0;

    const render = () => {
      frame += 0.02;
      ctx.clearRect(0, 0, width, height);

      const rows = 14;
      const cols = 22;
      const originX = width * 0.5;
      const originY = height * 0.35;

      const scaleX = width * 0.026;
      const scaleY = 7;
      const scaleZ = 12;

      const points: { x: number; y: number }[][] = [];

      for (let r = 0; r < rows; r++) {
        points[r] = [];
        for (let c = 0; c < cols; c++) {
          const strike = (c - cols / 2) * 1.5;
          const expiry = r * 0.8;
          // Volatility Smile formula: IV smile parabolic with strike + wave oscillation
          const smile = Math.pow(strike * 0.18, 2) * 12;
          const wave = Math.sin(frame + strike * 0.3 + expiry * 0.4) * 6;
          const iv = smile + wave;

          // Isometric 3D projection
          const px = originX + (c - cols / 2) * scaleX - (r - rows / 2) * scaleX * 0.6;
          const py = originY + (r - rows / 2) * scaleZ - iv * 1.8;
          points[r][c] = { x: px, y: py };
        }
      }

      // Draw wireframe grid lines
      ctx.lineWidth = 1.2;
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const p = points[r][c];
          if (c === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `rgba(192, 132, 252, ${0.2 + (r / rows) * 0.6})`;
        ctx.stroke();
      }

      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const p = points[r][c];
          if (r === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 + Math.abs(c - cols / 2) / cols * 0.5})`;
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full min-h-[320px] rounded-2xl bg-black/40 border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-white/70">
            3D IMPLIED VOLATILITY SURFACE
          </span>
        </div>
        <div className="font-mono text-xs text-purple-300">
          STRIKE × MATURITY
        </div>
      </div>

      <div className="w-full flex-1 flex items-center justify-center my-2">
        <canvas ref={canvasRef} className="w-full h-[220px]" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[11px] text-white/70 pt-2 border-t border-white/10">
        <div className="p-2 rounded bg-white/[0.02] border border-white/5">Black-Scholes</div>
        <div className="p-2 rounded bg-white/[0.02] border border-white/5">Monte Carlo</div>
        <div className="p-2 rounded bg-white/[0.02] border border-white/5">GARCH / EWMA</div>
        <div className="p-2 rounded bg-white/[0.02] border border-white/5">VaR / CVaR</div>
      </div>
    </div>
  );
};
