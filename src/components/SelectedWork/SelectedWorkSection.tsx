import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, Project } from '../../data/projects';
import { useCursor } from '../../hooks/useCursor';
import { ForgeDBViz } from './visualizations/ForgeDBViz';
import { DataPulseViz } from './visualizations/DataPulseViz';
import { PulseCartViz } from './visualizations/PulseCartViz';
import { SynapseViz } from './visualizations/SynapseViz';
import { CaseStudyView } from './CaseStudyView';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export const SelectedWorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { setCursor, resetCursor } = useCursor();

  const renderVisual = (type: Project['visualType']) => {
    switch (type) {
      case 'forgedb':
        return <ForgeDBViz />;
      case 'datapulse':
        return <DataPulseViz />;
      case 'pulsecart':
        return <PulseCartViz />;
      case 'synapse':
        return <SynapseViz />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-24 border-t border-warm-border bg-cream">
      {/* Section Header */}
      <div className="flex items-center gap-3 font-mono text-xs text-ink-muted tracking-widest uppercase mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-lavender" />
        <span>SECTION 03 — SELECTED WORK</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20"
      >
        <h2 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-tight text-ink uppercase leading-[0.9]">
          THINGS<br />
          <span className="inline-block px-4 py-1 rounded-3xl bg-peach mt-1">
            I'VE BUILT.
          </span>
        </h2>
        <p className="mt-4 font-mono text-base sm:text-lg text-ink-muted font-medium">
          some serious. some experimental. all mine.
        </p>
      </motion.div>

      {/* Mini Editorial Poster Project Cards */}
      <div className="flex flex-col gap-20">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-14 rounded-3xl bg-white border-2 border-ink/15 hover:border-ink transition-all duration-300 shadow-pastel-lg cursor-pointer"
            onClick={() => setSelectedProject(project)}
            onMouseEnter={() => setCursor('view', 'EXPLORE →')}
            onMouseLeave={resetCursor}
          >
            {/* Left Column: Project Editorial Copy */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-black text-[#111111]">
                  {project.num}
                </span>
                <span
                  className="font-mono text-[11px] font-bold px-3 py-1 rounded-full border border-ink/15 text-[#111111] uppercase shadow-sm"
                  style={{ backgroundColor: project.pastelBg }}
                >
                  {project.category}
                </span>
              </div>

              <h3 className="font-display font-black text-4xl sm:text-6xl text-[#111111] tracking-tight leading-[0.95] uppercase group-hover:translate-x-1.5 transition-transform duration-300">
                {project.title}
              </h3>

              <p className="text-lg text-[#26221E] font-medium leading-relaxed">
                {project.summary}
              </p>

              {/* Key Metric Sticker */}
              <div className="p-4 rounded-2xl bg-cream border-2 border-ink/10 shadow-sm flex flex-col gap-1 w-fit">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#554F49] font-bold">
                  {project.metrics.label}:
                </span>
                <span className="font-mono text-xl sm:text-2xl font-black text-[#111111]">
                  {project.metrics.value}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-3.5 py-1.5 rounded-xl bg-cream border border-ink/15 text-[#111111] font-bold shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="pt-3 flex items-center gap-2 font-mono text-xs text-[#111111] font-black uppercase tracking-wider group-hover:text-coral transition-colors">
                <span>READ EDITORIAL CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>

            {/* Right Column: Custom Visualizer */}
            <div className="lg:col-span-6 w-full">
              {renderVisual(project.visualType)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study View */}
      <CaseStudyView
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
