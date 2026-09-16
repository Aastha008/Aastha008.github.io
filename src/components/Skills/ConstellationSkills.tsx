import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EVIDENCE_SKILLS, EvidenceSkill } from '../../data/skills';
import { useCursor } from '../../hooks/useCursor';
import { Sparkles, CheckCircle } from 'lucide-react';

export const ConstellationSkills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<EvidenceSkill | null>(EVIDENCE_SKILLS[0]);
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="skills" className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-24 border-t border-warm-border bg-cream">
      {/* Section Header */}
      <div className="flex items-center gap-3 font-mono text-xs text-ink-muted tracking-widest uppercase mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-mint" />
        <span>SECTION 04 — TOOLS</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-tight text-ink uppercase leading-[0.9]">
          TOOLS<br />
          <span className="inline-block px-4 py-1 rounded-3xl bg-mint mt-1">
            I THINK WITH.
          </span>
        </h2>
        <p className="mt-4 font-mono text-sm sm:text-base text-ink-muted">
          // No arbitrary skill bars. Hover over any tool to inspect real production evidence.
        </p>
      </motion.div>

      {/* Grid: Word Cloud + Evidence Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Pastel Word Cloud */}
        <div className="lg:col-span-8 flex flex-wrap gap-3">
          {EVIDENCE_SKILLS.map((skill) => {
            const isHovered = selectedSkill?.name === skill.name;
            const sizeClass =
              skill.size === 'large'
                ? 'text-2xl sm:text-4xl px-5 py-3'
                : skill.size === 'medium'
                ? 'text-xl sm:text-2xl px-4 py-2.5'
                : 'text-base sm:text-lg px-3.5 py-2';

            return (
              <button
                key={skill.name}
                onClick={() => setSelectedSkill(skill)}
                onMouseEnter={() => {
                  setSelectedSkill(skill);
                  setCursor('explore', skill.name);
                }}
                onMouseLeave={resetCursor}
                className={`font-display font-black tracking-tight rounded-2xl border-2 transition-all duration-300 cursor-pointer ${sizeClass} ${
                  isHovered
                    ? 'border-ink text-[#111111] shadow-pastel scale-105'
                    : 'border-ink/15 text-[#111111] hover:border-ink bg-white shadow-sm'
                }`}
                style={{ backgroundColor: isHovered ? skill.pastelBg : undefined }}
              >
                {skill.name}
              </button>
            );
          })}
        </div>

        {/* Right Column: Sticky Evidence Inspector Card */}
        <div className="lg:col-span-4 sticky top-28">
          <AnimatePresence mode="wait">
            {selectedSkill && (
              <motion.div
                key={selectedSkill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="p-8 rounded-3xl border-2 border-ink/15 shadow-pastel bg-white flex flex-col gap-5"
                style={{ backgroundColor: selectedSkill.pastelBg }}
              >
                <div className="flex justify-between items-center pb-3 border-b border-ink/15">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#111111] font-bold">
                    TOOL EVIDENCE
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-white text-[#111111] font-black border border-ink/15 shadow-sm">
                    {selectedSkill.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-black text-4xl text-[#111111] tracking-tight mb-2">
                    {selectedSkill.name}
                  </h3>
                  <div className="flex items-start gap-2 pt-2">
                    <CheckCircle className="w-5 h-5 text-emerald-800 shrink-0 mt-0.5" />
                    <p className="font-sans text-base text-[#111111] font-semibold leading-relaxed">
                      {selectedSkill.evidence}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-ink/15 font-mono text-xs text-[#443E38] font-bold">
                  VERIFIED IN AASTHA'S WORKSPACE
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
