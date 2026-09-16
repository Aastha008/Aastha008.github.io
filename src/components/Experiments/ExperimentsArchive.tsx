import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIMENTS, Experiment } from '../../data/experiments';
import { useCursor } from '../../hooks/useCursor';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

export const ExperimentsArchive: React.FC = () => {
  const [hoveredExp, setHoveredExp] = useState<Experiment | null>(EXPERIMENTS[0]);
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="experiments" className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-24 border-t border-warm-border bg-cream">
      {/* Section Header */}
      <div className="flex items-center gap-3 font-mono text-xs text-ink-muted tracking-widest uppercase mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-pink" />
        <span>SECTION 06 — EXPERIMENTS</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-ink uppercase leading-[0.95]">
          WHAT HAPPENS<br />
          WHEN I<br />
          <span className="inline-block px-4 py-1 rounded-3xl bg-pink mt-1">
            JUST TRY THINGS?
          </span>
        </h2>
        <p className="mt-4 font-mono text-base sm:text-lg text-ink-muted">
          "Sometimes I just want to see what happens."
        </p>
      </motion.div>

      {/* Scrapbook Archive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive List */}
        <div className="lg:col-span-7 flex flex-col gap-3">
          {EXPERIMENTS.map((item) => {
            const isSelected = hoveredExp?.num === item.num;
            return (
              <a
                key={item.num}
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => {
                  setHoveredExp(item);
                  setCursor('open', 'GITHUB ↗');
                }}
                onMouseLeave={resetCursor}
                className={`p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between ${
                  isSelected
                    ? 'bg-white border-ink shadow-md scale-[1.01]'
                    : 'bg-white border-ink/15 hover:border-ink/40'
                }`}
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <span className="font-mono text-xs font-black text-[#111111]">
                    {item.num}
                  </span>
                  <span className="font-mono text-[11px] text-[#554F49] uppercase tracking-wider font-bold hidden sm:inline-block w-28">
                    {item.category}
                  </span>
                  <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-[#111111]">
                    {item.name}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-lg bg-cream border border-ink/15 text-[#111111] font-bold hidden md:inline-block">
                    {item.typeBadge}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#111111]" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Right Column: Sticky Scrapbook Note */}
        <div className="lg:col-span-5 sticky top-28">
          <AnimatePresence mode="wait">
            {hoveredExp && (
              <motion.div
                key={hoveredExp.num}
                initial={{ opacity: 0, rotate: -2, scale: 0.96 }}
                animate={{ opacity: 1, rotate: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="p-8 rounded-3xl bg-[#FFF3CD] border-2 border-amber-300/90 shadow-md flex flex-col gap-5 relative overflow-hidden"
              >
                {/* Washi tape visual motif */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/80 border border-ink/15 rounded-sm rotate-[-1deg] shadow-sm pointer-events-none" />

                <div className="flex justify-between items-center border-b border-ink/15 pb-3 pt-2">
                  <span className="font-mono text-xs text-[#78350F] uppercase tracking-widest font-black">
                    SCRAPBOOK // {hoveredExp.num}
                  </span>
                  <span className="font-mono text-xs text-[#554F49] font-bold">
                    {hoveredExp.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-3xl text-[#111111] mb-2">
                    {hoveredExp.name}
                  </h3>
                  <p className="text-[#2B2723] font-sans text-sm leading-relaxed font-medium">
                    {hoveredExp.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted font-bold">
                    TECH:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {hoveredExp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-white border border-warm-border text-ink font-bold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={hoveredExp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-ink/90 shadow-sm"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>OPEN REPOSITORY</span>
                  </a>
                  {hoveredExp.liveUrl && (
                    <a
                      href={hoveredExp.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-warm-border text-ink font-mono text-xs uppercase tracking-wider font-bold shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>DEMO</span>
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
