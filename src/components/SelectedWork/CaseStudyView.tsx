import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../data/projects';
import { useCursor } from '../../hooks/useCursor';
import { X, Github, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyView: React.FC<Props> = ({ project, onClose }) => {
  const { setCursor, resetCursor } = useCursor();

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-cream overflow-y-auto text-ink p-6 sm:p-12 lg:p-20"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 flex justify-between items-center py-4 bg-cream/90 backdrop-blur-md border-b border-warm-border mb-12">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-butter">
              EDITORIAL CASE STUDY
            </span>
            <span className="font-mono text-xs text-ink-muted hidden sm:inline font-semibold">
              // {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            onMouseEnter={() => setCursor('click', 'CLOSE ✕')}
            onMouseLeave={resetCursor}
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink text-white hover:bg-ink/90 font-mono text-xs tracking-wider font-semibold shadow-pastel"
          >
            <span>BACK TO STREAM</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Project Editorial Header */}
        <div className="max-w-5xl mx-auto flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold px-3 py-1 rounded-lg bg-white border border-warm-border">
              PROJECT {project.num}
            </span>
            <span className="font-mono text-sm tracking-widest text-ink-muted uppercase">
              {project.subtitle}
            </span>
          </div>

          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-[#111111] uppercase">
            {project.title}
          </h1>

          <div
            className="p-6 sm:p-8 rounded-3xl border-2 border-ink/15 shadow-sm font-display font-bold text-2xl sm:text-3xl text-[#111111] leading-tight"
            style={{ backgroundColor: project.pastelBg }}
          >
            "{project.statement}"
          </div>

          <p className="text-xl sm:text-2xl text-[#2B2723] font-medium max-w-3xl leading-relaxed">
            {project.summary}
          </p>

          {/* Links Bar */}
          <div className="flex flex-wrap gap-4 pt-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('open', 'GITHUB ↗')}
                onMouseLeave={resetCursor}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-[#222222] shadow-pastel"
              >
                <Github className="w-4 h-4" />
                <span>VIEW REPOSITORY</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('open', 'LIVE APP ↗')}
                onMouseLeave={resetCursor}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border-2 border-ink/15 text-[#111111] font-mono text-xs uppercase tracking-wider font-black hover:border-[#111111] shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>LIVE APPLICATION</span>
              </a>
            )}
          </div>
        </div>

        {/* 4 Pillars Case Study Breakdown */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* THE PROBLEM */}
          <div className="p-8 rounded-3xl bg-white border-2 border-ink/15 shadow-sm flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest font-black px-3 py-1 rounded-full bg-peach border border-amber-300 text-[#111111] w-fit">
              01 — THE PROBLEM
            </span>
            <p className="text-[#2B2723] leading-relaxed font-sans text-base font-medium">
              {project.problem}
            </p>
          </div>

          {/* THE APPROACH */}
          <div className="p-8 rounded-3xl bg-white border-2 border-ink/15 shadow-sm flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest font-black px-3 py-1 rounded-full bg-lavender border border-purple-300 text-[#111111] w-fit">
              02 — THE APPROACH
            </span>
            <p className="text-[#2B2723] leading-relaxed font-sans text-base font-medium">
              {project.approach}
            </p>
          </div>

          {/* THE SYSTEM */}
          <div className="p-8 rounded-3xl bg-white border-2 border-ink/15 shadow-sm flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest font-black px-3 py-1 rounded-full bg-powder border border-sky-300 text-[#111111] w-fit">
              03 — THE SYSTEM
            </span>
            <p className="text-[#2B2723] leading-relaxed font-sans text-base font-medium">
              {project.system}
            </p>
          </div>

          {/* THE RESULT */}
          <div className="p-8 rounded-3xl bg-white border-2 border-ink/15 shadow-sm flex flex-col gap-4">
            <span className="font-mono text-xs uppercase tracking-widest font-black px-3 py-1 rounded-full bg-mint border border-emerald-300 text-[#111111] w-fit">
              04 — THE RESULT
            </span>
            <p className="text-[#2B2723] leading-relaxed font-sans text-base font-medium">
              {project.result}
            </p>
            <div className="mt-2 flex items-center gap-2 font-mono text-xs text-emerald-900 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Verified production outcome</span>
            </div>
          </div>
        </div>

        {/* Technology Stack Grid */}
        <div className="max-w-5xl mx-auto border-t border-warm-border pt-10 pb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-muted block mb-4 font-bold">
            ARCHITECTURE &amp; CORE TECH:
          </span>
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-xl bg-white border border-warm-border font-mono text-xs sm:text-sm font-bold text-ink shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
