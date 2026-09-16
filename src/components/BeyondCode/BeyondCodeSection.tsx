import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../hooks/useCursor';

export const BeyondCodeSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const domains = [
    {
      title: 'BASKETBALL',
      num: '01',
      subtitle: 'PACE & SPATIAL INTUITION',
      desc: 'High-speed court dynamics, split-second decisions under defensive pressure, and reading angles before they develop.',
      bg: '#FFD6C0', // Soft peach
      accent: '#F4A58A',
    },
    {
      title: 'DESIGN',
      num: '02',
      subtitle: 'TYPOGRAPHY & VISUAL HIERARCHY',
      desc: 'Obsession with kerning, negative space, and editorial layout systems that direct human attention effortlessly.',
      bg: '#DCCCF5', // Lavender
      accent: '#8A5BD6',
    },
    {
      title: 'VIDEO',
      num: '03',
      subtitle: 'CINEMATOGRAPHY & RHYTHM',
      desc: 'Storyboarding visual tempo, precise cuts, color grading palettes, and sensory pacing that moves emotion.',
      bg: '#F8E7A1', // Butter yellow
      accent: '#D48806',
    },
    {
      title: 'CREATIVE TECH',
      num: '04',
      subtitle: 'ALGORITHMS & GENERATIVE PLAY',
      desc: 'Exploring generative shaders, algorithmic motion systems, and playful human-computer interaction experiments.',
      bg: '#CDEBD8', // Mint
      accent: '#2D9A64',
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-24 border-t border-warm-border bg-cream">
      {/* Section Header */}
      <div className="flex items-center gap-3 font-mono text-xs text-ink-muted tracking-widest uppercase mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-coral" />
        <span>SECTION 07 — BEYOND CODE</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-tight text-ink uppercase leading-[0.9]">
          WHEN I'M NOT<br />
          <span className="inline-block px-4 py-1 rounded-3xl bg-peach mt-1">
            BUILDING THINGS...
          </span>
        </h2>
      </motion.div>

      {/* Pastel Motion Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {domains.map((dom) => (
          <motion.div
            key={dom.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setCursor('explore', dom.title)}
            onMouseLeave={resetCursor}
            className="group relative p-10 sm:p-12 rounded-3xl border border-warm-border hover:border-ink/30 shadow-pastel flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1"
            style={{ backgroundColor: dom.bg }}
          >
            <div className="flex justify-between items-center border-b border-ink/10 pb-4">
              <span className="font-mono text-xs font-bold text-ink">
                {dom.num} //
              </span>
              <span className="font-mono text-[10px] text-ink-muted uppercase tracking-widest font-bold">
                {dom.subtitle}
              </span>
            </div>

            <div className="my-6">
              <h3 className="font-display font-black text-4xl sm:text-5xl text-ink tracking-tight uppercase group-hover:translate-x-1.5 transition-transform">
                {dom.title}
              </h3>
            </div>

            <div className="pt-4 border-t border-ink/10">
              <p className="font-sans text-base text-ink leading-relaxed">
                {dom.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
