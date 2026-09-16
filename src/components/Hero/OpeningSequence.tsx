import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Database, Terminal, Cpu, LineChart, Code2 } from 'lucide-react';
import { useCursor } from '../../hooks/useCursor';

export const OpeningSequence: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const floatingStickers = [
    { label: 'PYTHON', bg: '#F8E7A1', icon: Terminal, x: -380, y: -140, rot: -8 },
    { label: 'SQL', bg: '#C9E7F5', icon: Database, x: 380, y: -130, rot: 6 },
    { label: 'POWER BI', bg: '#FFD6C0', icon: LineChart, x: -390, y: 110, rot: 5 },
    { label: 'AI / ML', bg: '#DCCCF5', icon: Sparkles, x: 390, y: 90, rot: -6 },
    { label: 'DUCKDB', bg: '#CDEBD8', icon: Database, x: -280, y: 220, rot: -4 },
    { label: 'SCIPY', bg: '#F4C7D9', icon: Code2, x: 280, y: 220, rot: 8 },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between p-6 sm:p-12 lg:p-16 overflow-hidden select-none bg-cream">
      {/* Top Header Spacing */}
      <div className="flex justify-between items-start pt-16 sm:pt-12 text-ink-muted font-mono text-xs uppercase tracking-widest">
        <div className="flex flex-col gap-1">
          <span className="text-ink font-bold">Aastha Gupta</span>
          <span className="text-ink-muted">AI &amp; Data Intelligence • VIT Vellore</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-ink font-bold">01 — Digital Portfolio</span>
          <span className="text-ink-muted">ANALYTICS • MACHINE LEARNING • SYSTEMS</span>
        </div>
      </div>

      {/* Center Monumental Editorial Hero */}
      <div className="relative my-auto flex flex-col items-center justify-center text-center px-4 py-16">
        {/* Hero Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-butter border border-ink/10 text-ink font-mono text-xs tracking-widest uppercase font-semibold mb-6 shadow-sm">
            ✦ AI ANALYST &amp; DECISION INTELLIGENCE
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight leading-[0.95] text-ink uppercase">
            DATA DOESN'T <span className="inline-block px-4 py-1 rounded-3xl bg-lavender">SPEAK.</span>
            <br />
            I BUILD THE <span className="inline-block px-4 py-1 rounded-3xl bg-peach">REASONING</span>
            <br />
            THAT UNCOVERS <span className="inline-block px-4 py-1 rounded-3xl bg-mint">TRUTH.</span>
          </h1>

          <p className="mt-8 font-sans text-lg sm:text-xl text-[#2C2724] max-w-2xl mx-auto leading-relaxed font-normal">
            Computer Science &amp; Data Science at <strong>VIT Vellore</strong>. Interrogating complex systems with statistical rigor, self-healing LLM query agents, and decision-grade predictive analytics.
          </p>

          {/* Clean Interactive Data & Intelligence Pills Ribbon */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {floatingStickers.map((st) => {
              const Icon = st.icon;
              return (
                <motion.div
                  key={st.label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onMouseEnter={() => setCursor('explore', st.label)}
                  onMouseLeave={resetCursor}
                  className="flex items-center gap-2 px-4 py-2 rounded-2xl font-mono text-xs font-bold text-[#111111] shadow-sm border-2 border-ink/15 cursor-pointer transition-transform"
                  style={{ backgroundColor: st.bg }}
                >
                  <Icon className="w-3.5 h-3.5 text-[#111111]" />
                  <span>{st.label}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom Pacing & Scroll Guide */}
      <div className="flex justify-between items-end pb-4 border-t border-warm-border pt-4">
        <div className="flex items-center gap-2 font-mono text-xs font-semibold text-ink uppercase tracking-widest">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 text-coral animate-bounce" />
        </div>

        <div className="font-mono text-xs text-ink-muted hidden sm:block">
          HYPOTHESIS ──► EXPERIMENTATION ──► MODELS ──► DECISION INTELLIGENCE
        </div>
      </div>
    </div>
  );
};
