import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HORIZONTAL_DOMAINS } from '../../data/skills';
import { useCursor } from '../../hooks/useCursor';
import { ArrowRight, Sparkles } from 'lucide-react';

export const WhatIBuildSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { setCursor, resetCursor } = useCursor();

  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-24 border-t border-warm-border bg-cream flex flex-col justify-center">
      {/* Section Tag */}
      <div className="flex items-center gap-3 font-mono text-xs text-ink-muted tracking-widest uppercase mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-butter" />
        <span>SECTION 02 — WHAT I BUILD</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <p className="font-mono text-sm uppercase tracking-widest text-ink-muted">
          FROM RAW SIGNALS TO DEFENSIVE DECISIONS.
        </p>
        <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-ink uppercase mt-3">
          HOW I DISSECT<br />
          <span className="inline-block px-4 py-1 rounded-3xl bg-butter mt-1">
            COMPLEXITY.
          </span>
        </h2>
      </motion.div>

      {/* Typography As Interface - Giant Interactive Domain Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: 4 Monumental Words */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          {HORIZONTAL_DOMAINS.map((domain, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={domain.id}
                onClick={() => setActiveTab(index)}
                onMouseEnter={() => setCursor('click', `SELECT ${domain.title}`)}
                onMouseLeave={resetCursor}
                className={`group text-left p-5 sm:p-6 rounded-3xl border transition-all duration-300 flex items-center justify-between ${
                  isActive
                    ? 'border-ink shadow-pastel scale-[1.02]'
                    : 'border-warm-border bg-white/40 hover:bg-white hover:border-ink/20'
                }`}
                style={{ backgroundColor: isActive ? domain.pastelBg : undefined }}
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-sm font-bold text-ink-muted">
                    0{index + 1}
                  </span>
                  <span className="font-display font-black text-4xl sm:text-6xl tracking-tight text-ink">
                    {domain.title}
                  </span>
                </div>
                <ArrowRight
                  className={`w-6 h-6 transition-all ${
                    isActive ? 'opacity-100 text-ink translate-x-1' : 'opacity-20 -translate-x-2 text-ink-muted'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Column: Dynamic Technology Revealer */}
        <div className="lg:col-span-6">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 rounded-3xl border border-warm-border shadow-pastel bg-white relative overflow-hidden"
          >
            {/* Status tag */}
            <div className="flex justify-between items-center pb-6 border-b border-warm-border mb-8">
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-ink px-3 py-1 rounded-full bg-cream">
                ✨ {HORIZONTAL_DOMAINS[activeTab].highlight}
              </span>
              <span className="font-mono text-xs text-ink-muted">
                0{activeTab + 1} / 04
              </span>
            </div>

            <h3 className="font-display font-bold text-3xl sm:text-4xl text-ink tracking-tight mb-3">
              {HORIZONTAL_DOMAINS[activeTab].subtitle}
            </h3>

            <p className="text-ink-muted font-sans text-base leading-relaxed mb-8">
              {HORIZONTAL_DOMAINS[activeTab].description}
            </p>

            {/* Production Stack */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-[11px] uppercase tracking-widest text-ink-muted font-semibold">
                PRODUCTION TECHNOLOGIES:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {HORIZONTAL_DOMAINS[activeTab].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-xl bg-cream border border-warm-border font-mono text-xs sm:text-sm font-bold text-ink shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
