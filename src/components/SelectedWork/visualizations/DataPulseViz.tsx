import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, Zap, BarChart2 } from 'lucide-react';

export const DataPulseViz: React.FC = () => {
  const [latency, setLatency] = useState(38);

  const sampleQueries = [
    { q: "Rank payment methods by AOV", status: "VALIDATED", time: "34ms" },
    { q: "A/B test checkout conversion lift", status: "SciPy z-test (p=0.018)", time: "42ms" },
    { q: "Sample Ratio Mismatch check", status: "SRM PASS (χ²=0.42)", time: "39ms" },
  ];

  return (
    <div className="w-full h-full min-h-[320px] rounded-3xl bg-[#FAF7F2] border-2 border-ink/15 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-ink/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-bold">
            DATAPULSE // DUCKDB + SCIPY PIPELINE
          </span>
        </div>
        <div className="font-mono text-xs text-[#064E3B] font-bold bg-mint px-3 py-1 rounded-full border border-emerald-300">
          547K+ RECORDS
        </div>
      </div>

      {/* Query Execution Feed */}
      <div className="my-6 flex flex-col gap-2.5">
        {sampleQueries.map((item) => (
          <div
            key={item.q}
            className="p-3 rounded-2xl bg-white border border-ink/15 flex items-center justify-between font-mono text-xs shadow-sm"
          >
            <div className="flex items-center gap-2.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-700" />
              <span className="text-[#111111] font-bold">"{item.q}"</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-[#064E3B] border border-emerald-300 font-bold text-[10px]">
                {item.status}
              </span>
              <span className="text-[#554F49] font-bold text-[10px]">{item.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Benchmark summary */}
      <div className="p-4 rounded-2xl bg-white border-2 border-ink/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-xs text-[#111111]">
        <div className="flex items-center gap-2 font-medium">
          <Zap className="w-4 h-4 text-emerald-700" />
          <span>Self-Healing LangGraph Loop • Deterministic SciPy</span>
        </div>
        <span className="font-black text-emerald-950 bg-mint px-3 py-1 rounded-xl border border-emerald-300">
          AVG LATENCY: &lt; 50ms
        </span>
      </div>
    </div>
  );
};
