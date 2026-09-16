import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const CreditRiskViz: React.FC = () => {
  const [activeGrade, setActiveGrade] = useState<'A' | 'G'>('G');

  // Realistic loan grade default rates from LendingClub analysis
  const grades = [
    { grade: 'A', defaultRate: '5.8%', color: '#38bdf8', label: 'Lowest Risk' },
    { grade: 'B', defaultRate: '11.2%', color: '#60a5fa', label: 'Prime' },
    { grade: 'C', defaultRate: '16.9%', color: '#818cf8', label: 'Moderate' },
    { grade: 'D', defaultRate: '22.4%', color: '#a78bfa', label: 'Elevated' },
    { grade: 'E', defaultRate: '28.1%', color: '#c084fc', label: 'Subprime' },
    { grade: 'F', defaultRate: '33.5%', color: '#e879f9', label: 'High Risk' },
    { grade: 'G', defaultRate: '37.2%', color: '#f43f5e', label: 'Maximum Risk' },
  ];

  return (
    <div className="w-full h-full min-h-[320px] rounded-2xl bg-black/40 border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
      {/* Visual Top Header */}
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-wider text-white/70">
            LENDINGCLUB 887,379 LOANS
          </span>
        </div>
        <div className="font-mono text-xs text-emerald-400 font-semibold">
          6.4× SPREAD ISOLATED
        </div>
      </div>

      {/* Cluster Distribution Bars */}
      <div className="py-6 flex flex-col gap-3">
        <div className="grid grid-cols-7 gap-2 h-36 items-end">
          {grades.map((g) => {
            const heightPercent = (parseFloat(g.defaultRate) / 40) * 100;
            const isSelected = activeGrade === g.grade;
            return (
              <div
                key={g.grade}
                onClick={() => setActiveGrade(g.grade as any)}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <div className="font-mono text-[10px] text-white/50 group-hover:text-white transition-colors">
                  {g.defaultRate}
                </div>
                <motion.div
                  className="w-full rounded-t-sm transition-all duration-300 relative"
                  style={{
                    height: `${heightPercent}%`,
                    backgroundColor: g.color,
                    opacity: isSelected ? 1 : 0.45,
                  }}
                  whileHover={{ scaleY: 1.05 }}
                />
                <span className={`font-mono text-xs font-bold transition-colors ${isSelected ? 'text-white' : 'text-white/40'}`}>
                  {g.grade}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Metric Highlight Card */}
      <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 font-mono text-xs">
        <div>
          <span className="text-white/50">DIAGNOSTIC FINDING:</span>
          <span className="text-white font-semibold ml-2">
            Grade A (5.8%) vs Grade G (37.2%)
          </span>
        </div>
        <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
          6.4× DEFAULT SPREAD
        </span>
      </div>
    </div>
  );
};
