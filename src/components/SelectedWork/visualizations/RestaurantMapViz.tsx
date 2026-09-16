import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const RestaurantMapViz: React.FC = () => {
  const [latency, setLatency] = useState(38);

  useEffect(() => {
    const int = setInterval(() => {
      setLatency(34 + Math.floor(Math.random() * 14));
    }, 1800);
    return () => clearInterval(int);
  }, []);

  const clusters = [
    { name: 'Koramangala', count: '8,420', rating: '4.2' },
    { name: 'Indiranagar', count: '6,180', rating: '4.3' },
    { name: 'Whitefield', count: '5,940', rating: '3.9' },
    { name: 'HSR Layout', count: '5,210', rating: '4.1' },
    { name: 'Jayanagar', count: '4,650', rating: '4.0' },
  ];

  return (
    <div className="w-full h-full min-h-[320px] rounded-2xl bg-black/40 border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-white/70">
            DUCKDB OLAP • 50,000+ LISTINGS
          </span>
        </div>
        <div className="font-mono text-xs text-orange-400 font-bold">
          LATENCY: {latency}ms
        </div>
      </div>

      {/* Geospatial scatter grid */}
      <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {clusters.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col gap-1"
          >
            <span className="font-mono text-xs text-white/50">{c.name}</span>
            <span className="font-display font-bold text-lg text-white">{c.count}</span>
            <div className="flex justify-between font-mono text-[10px] text-white/40 pt-1 border-t border-white/5">
              <span>Avg Rating</span>
              <span className="text-orange-300 font-semibold">{c.rating} ★</span>
            </div>
          </motion.div>
        ))}

        <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 flex flex-col justify-center">
          <span className="font-mono text-[10px] text-orange-300 uppercase">PIPELINE STATUS</span>
          <span className="font-mono text-xs text-white font-bold">AUTOMATED INGESTION</span>
        </div>
      </div>

      <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex justify-between items-center font-mono text-xs text-white/60">
        <span>IN-MEMORY COLUMNAR SCAN</span>
        <span className="text-emerald-400 font-semibold">SUB-50ms DUCKDB ENGINE</span>
      </div>
    </div>
  );
};
