import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../hooks/useCursor';
import { ParticleMorphState } from '../BackgroundCanvas/InteractiveParticleField';
import { Sparkles, Brain, Database, TrendingUp } from 'lucide-react';

interface Props {
  onTriggerMorph: (state: ParticleMorphState) => void;
}

export const WhoSection: React.FC<Props> = ({ onTriggerMorph }) => {
  const { setCursor, resetCursor } = useCursor();
  const [activeBadge, setActiveBadge] = useState<ParticleMorphState>('data');

  const handlePillClick = (state: ParticleMorphState) => {
    setActiveBadge(state);
    onTriggerMorph(state);
  };

  const domainPills = [
    { id: 'data', label: 'ANALYTICS', bg: '#F8E7A1', icon: Brain },
    { id: 'ai', label: 'AI AGENTS', bg: '#DCCCF5', icon: Sparkles },
    { id: 'ml', label: 'ML MODELS', bg: '#C9E7F5', icon: TrendingUp },
    { id: 'logic', label: 'DECISIONS', bg: '#CDEBD8', icon: Database },
  ];

  return (
    <section id="who" className="relative py-24 sm:py-32 px-6 sm:px-12 lg:px-24 flex flex-col justify-center border-t border-warm-border bg-cream">
      {/* Section Tag */}
      <div className="flex items-center gap-3 font-mono text-xs text-ink-muted tracking-widest uppercase mb-8">
        <span className="w-2.5 h-2.5 rounded-full bg-coral" />
        <span>SECTION 01 — WHO AM I?</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Monumental Editorial Statement */}
        <div className="lg:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-ink uppercase"
          >
            ANALYTICAL<br />
            <span className="inline-block px-4 py-1 rounded-3xl bg-peach">
              RIGOR.
            </span>
            <br /><br />
            ALGORITHMIC<br />
            <span className="inline-block px-4 py-1 rounded-3xl bg-lavender">
              INTUITION.
            </span>
            <br /><br />
            DECISION-GRADE<br />
            <span className="inline-block px-4 py-1 rounded-3xl bg-mint">
              CLARITY.
            </span>
          </motion.h2>

          {/* Restrained Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 sm:mt-14 max-w-2xl text-lg sm:text-xl text-ink-muted font-sans font-normal leading-relaxed"
          >
            I'm Aastha, an <strong className="text-ink font-semibold">AI Analyst &amp; Software Engineer</strong> studying at <strong className="text-ink font-semibold">VIT Vellore</strong>. I operate at the intersection of exploratory data analysis, applied machine learning, and self-healing AI agents. I don't settle for surface metrics—I build systems that interrogate high-dimensional noise to uncover decision-grade truth.
          </motion.p>
        </div>

        {/* Right Column: Playful Pastel Data Field Controller */}
        <div className="lg:col-span-4 flex flex-col gap-6 pt-4 lg:pt-8 border-t lg:border-t-0 lg:border-l border-warm-border lg:pl-12">
          <div className="font-mono text-xs uppercase tracking-widest text-ink font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-coral" />
            <span>INTERACTIVE DATA PLAYGROUND</span>
          </div>
          <p className="text-sm text-ink-muted font-sans leading-relaxed">
            Finding signal inside high-dimensional noise. Click any core discipline below to assemble the ambient background field:
          </p>

          {/* Interactive Morph Pills */}
          <div className="grid grid-cols-2 gap-3">
            {domainPills.map((pill) => {
              const Icon = pill.icon;
              const isSelected = activeBadge === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => handlePillClick(pill.id as any)}
                  onMouseEnter={() => setCursor('click', `MORPH ${pill.label}`)}
                  onMouseLeave={resetCursor}
                  className={`flex items-center justify-center gap-2 p-3.5 rounded-2xl font-mono text-xs tracking-widest uppercase font-bold transition-all duration-300 border ${
                    isSelected
                      ? 'border-ink text-ink shadow-pastel scale-105'
                      : 'border-warm-border text-ink-muted hover:border-ink/30 bg-white/60'
                  }`}
                  style={{ backgroundColor: isSelected ? pill.bg : undefined }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{pill.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 p-5 rounded-2xl bg-white border border-warm-border shadow-pastel-sm font-mono text-xs text-ink-muted flex flex-col gap-2">
            <div className="flex justify-between">
              <span>ACTIVE DOMAIN:</span>
              <span className="text-ink font-bold uppercase">{activeBadge}</span>
            </div>
            <div className="flex justify-between">
              <span>CORE PHILOSOPHY:</span>
              <span className="text-ink font-medium">Grounded, Defensible Intelligence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
