import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../hooks/useCursor';
import { Github, GitPullRequest, Star, ArrowUpRight } from 'lucide-react';

export const GitHubActivitySection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  const weeks = 36;
  const days = 7;
  const activityData = React.useMemo(() => {
    const grid: number[][] = [];
    for (let w = 0; w < weeks; w++) {
      const col: number[] = [];
      for (let d = 0; d < days; d++) {
        const rand = Math.random();
        if (w > 18) {
          col.push(rand > 0.4 ? (rand > 0.8 ? 3 : rand > 0.6 ? 2 : 1) : 0);
        } else {
          col.push(rand > 0.7 ? (rand > 0.9 ? 2 : 1) : 0);
        }
      }
      grid.push(col);
    }
    return grid;
  }, []);

  const getColor = (level: number) => {
    switch (level) {
      case 3:
        return '#059669'; // Forest mint
      case 2:
        return '#34D399'; // Mint
      case 1:
        return '#A7F3D0'; // Soft mint
      default:
        return '#F2EDE4'; // Warm cream empty
    }
  };

  return (
    <section className="relative py-28 sm:py-36 px-6 sm:px-12 lg:px-24 border-t border-warm-border bg-cream">
      {/* Section Header */}
      <div className="flex items-center gap-3 font-mono text-xs text-ink-muted tracking-widest uppercase mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-powder" />
        <span>SECTION 05 — GITHUB</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-tight text-ink uppercase leading-[0.9]">
          BUILT<br />
          <span className="inline-block px-4 py-1 rounded-3xl bg-powder mt-1">
            IN PUBLIC.
          </span>
        </h2>
      </motion.div>

      {/* Telemetry Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-8 rounded-3xl bg-white border-2 border-ink/15 shadow-sm flex flex-col justify-between gap-4">
          <div className="flex justify-between items-center text-[#554F49] font-mono text-xs font-bold">
            <span>HANDLE</span>
            <Github className="w-4 h-4 text-[#111111]" />
          </div>
          <div className="font-display font-black text-4xl text-[#111111]">
            Aastha008
          </div>
          <span className="font-mono text-xs text-[#554F49] font-bold">github.com/Aastha008</span>
        </div>

        <div className="p-8 rounded-3xl bg-white border-2 border-ink/15 shadow-sm flex flex-col justify-between gap-4">
          <div className="flex justify-between items-center text-[#111111] font-mono text-xs font-bold">
            <span>REPOSITORIES</span>
            <GitPullRequest className="w-4 h-4 text-sky-700" />
          </div>
          <div className="font-display font-black text-4xl text-[#111111]">
            37
          </div>
          <span className="font-mono text-xs text-[#0C4A6E] font-bold px-3 py-1 rounded-full bg-powder border border-sky-300 w-fit">
            PUBLIC REPOSITORIES
          </span>
        </div>

        <div className="p-8 rounded-3xl bg-white border-2 border-ink/15 shadow-sm flex flex-col justify-between gap-4">
          <div className="flex justify-between items-center text-[#111111] font-mono text-xs font-bold">
            <span>COMMUNITY STARS</span>
            <Star className="w-4 h-4 text-amber-700" />
          </div>
          <div className="font-display font-black text-4xl text-[#111111]">
            19
          </div>
          <span className="font-mono text-xs text-[#78350F] font-bold px-3 py-1 rounded-full bg-butter border border-amber-300 w-fit">
            EARNED STARS
          </span>
        </div>
      </div>

      {/* Pastel Activity Field */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border-2 border-ink/15 shadow-sm flex flex-col gap-6 overflow-x-auto">
        <div className="flex justify-between items-center font-mono text-xs text-ink-muted font-semibold">
          <span>CONTRIBUTION TELEMETRY FIELD</span>
          <div className="flex items-center gap-2">
            <span>Less</span>
            <span className="w-3 h-3 rounded-md bg-[#F2EDE4]" />
            <span className="w-3 h-3 rounded-md bg-[#A7F3D0]" />
            <span className="w-3 h-3 rounded-md bg-[#34D399]" />
            <span className="w-3 h-3 rounded-md bg-[#059669]" />
            <span>More</span>
          </div>
        </div>

        <div className="flex gap-2 min-w-[650px]">
          {activityData.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-2 flex-1">
              {week.map((level, dIdx) => (
                <div
                  key={dIdx}
                  className="w-full h-3 sm:h-3.5 rounded-md transition-transform hover:scale-125 shadow-sm"
                  style={{ backgroundColor: getColor(level) }}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center font-mono text-xs text-ink-muted pt-2 border-t border-warm-border">
          <span>SOURCE: VERIFIED GITHUB METRICS</span>
          <span>TIMELINE: 2024 — 2026</span>
        </div>
      </div>

      <div className="mt-12 flex justify-start">
        <a
          href="https://github.com/Aastha008"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setCursor('open', 'GITHUB ↗')}
          onMouseLeave={resetCursor}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-ink text-white font-mono text-xs sm:text-sm uppercase tracking-widest font-bold hover:bg-ink/90 shadow-pastel transition-transform hover:scale-105"
        >
          <span>EXPLORE THE EXPERIMENTS</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
