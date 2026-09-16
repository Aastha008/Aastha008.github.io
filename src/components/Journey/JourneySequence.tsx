import React from 'react';
import { motion } from 'framer-motion';
import { JOURNEY } from '../../data/journey';
import { useCursor } from '../../hooks/useCursor';

export const JourneySequence: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-24 border-t border-warm-border bg-cream">
      {/* Section Header */}
      <div className="flex items-center gap-3 font-mono text-xs text-ink-muted tracking-widest uppercase mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-butter" />
        <span>SECTION 08 — JOURNEY</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-tight text-ink uppercase leading-[0.9]">
          THE<br />
          <span className="inline-block px-4 py-1 rounded-3xl bg-butter mt-1">
            TRAJECTORY.
          </span>
        </h2>
      </motion.div>

      {/* Vertical Sequence */}
      <div className="flex flex-col divide-y divide-warm-border border-y border-warm-border">
        {JOURNEY.map((item, idx) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onMouseEnter={() => setCursor('explore', item.year)}
            onMouseLeave={resetCursor}
            className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
          >
            {/* Year */}
            <div className="lg:col-span-3">
              <span className="font-display font-black text-5xl sm:text-6xl text-ink/30 group-hover:text-coral transition-colors">
                {item.year}
              </span>
            </div>

            {/* Focus Statement */}
            <div className="lg:col-span-5">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-ink tracking-tight uppercase mb-3">
                {item.focus}
              </h3>
              <p className="font-sans text-base text-ink-muted leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Badges */}
            <div className="lg:col-span-4 flex flex-wrap gap-2 pt-2 lg:justify-end">
              {item.subtitles.map((sub) => (
                <span
                  key={sub}
                  className="font-mono text-xs px-3 py-1.5 rounded-xl bg-white border border-warm-border font-bold text-ink shadow-sm"
                >
                  {sub}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
