import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Layers, ShieldCheck, RefreshCw } from 'lucide-react';

export const ForgeDBViz: React.FC = () => {
  const [activeFrame, setActiveFrame] = useState<number>(1);
  const [bufferHits, setBufferHits] = useState(842);

  const frames = [
    { id: 0, page: 'Page #102', type: 'B+ Tree Root', status: 'PINNED', lru: 'Hot' },
    { id: 1, page: 'Page #204', type: 'Leaf (Slotted)', status: 'HIT (LRU)', lru: 'Hot' },
    { id: 2, page: 'Page #308', type: 'Data (4KB)', status: 'DIRTY (WAL)', lru: 'Warm' },
    { id: 3, page: 'Page #412', type: 'Index Node', status: 'SHARED LOCK', lru: 'Cool' },
  ];

  const handleInspect = (id: number) => {
    setActiveFrame(id);
    setBufferHits((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full min-h-[320px] rounded-3xl bg-[#FAF7F2] border-2 border-ink/15 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
      {/* Visual Header */}
      <div className="flex justify-between items-center border-b border-ink/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-bold">
            FORGEDB // LRU BUFFER POOL (4KB PAGES)
          </span>
        </div>
        <div className="font-mono text-xs text-[#2E1065] font-bold bg-lavender px-3 py-1 rounded-full border border-purple-300">
          ACID ARIES RECOVERY
        </div>
      </div>

      {/* Frame Visualizer */}
      <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {frames.map((f) => {
          const isSelected = activeFrame === f.id;
          return (
            <div
              key={f.id}
              onClick={() => handleInspect(f.id)}
              className={`p-3.5 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex flex-col gap-1.5 ${
                isSelected
                  ? 'bg-lavender border-purple-500 shadow-md scale-105'
                  : 'bg-white border-ink/15 hover:border-purple-400'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-[#554F49] font-bold">FRAME #{f.id}</span>
                <span className="w-2 h-2 rounded-full bg-purple-600" />
              </div>
              <span className="font-mono text-xs font-black text-[#111111]">{f.page}</span>
              <span className="text-[11px] text-[#332E2A] font-medium leading-tight">{f.type}</span>
              <span className="font-mono text-[9px] px-2 py-0.5 rounded-md bg-purple-100 border border-purple-300 text-purple-950 font-bold w-fit mt-1">
                {f.status}
              </span>
            </div>
          );
        })}
      </div>

      {/* Metric details */}
      <div className="p-4 rounded-2xl bg-white border-2 border-ink/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-xs text-[#111111]">
        <div className="flex items-center gap-2 font-medium">
          <ShieldCheck className="w-4 h-4 text-purple-700" />
          <span>Strict 2PL Locking + Write-Ahead Log (WAL)</span>
        </div>
        <span className="font-black text-purple-900 bg-lavender px-3 py-1 rounded-xl border border-purple-300">
          CACHE HITS: {bufferHits}
        </span>
      </div>
    </div>
  );
};
