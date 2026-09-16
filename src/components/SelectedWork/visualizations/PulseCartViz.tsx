import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, TrendingUp, CheckCircle, BarChart } from 'lucide-react';

export const PulseCartViz: React.FC = () => {
  const funnelStages = [
    { stage: 'Sessions', count: '100K', drop: '100%', color: '#F8E7A1' },
    { stage: 'Product View', count: '64.2K', drop: '-35.8%', color: '#FFD6C0' },
    { stage: 'Cart Add', count: '28.1K', drop: '-56.2%', color: '#FFD6C0' },
    { stage: 'Checkout', count: '14.8K', drop: '-47.3%', color: '#F8E7A1' },
    { stage: 'Purchased', count: '10.2K', drop: '10.2% CVR', color: '#CDEBD8' },
  ];

  return (
    <div className="w-full h-full min-h-[320px] rounded-3xl bg-[#FAF7F2] border-2 border-ink/15 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
      <div className="flex justify-between items-center border-b border-ink/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-bold">
            PULSECART // 100K SESSIONS FUNNEL
          </span>
        </div>
        <div className="font-mono text-xs text-[#78350F] font-bold bg-butter px-3 py-1 rounded-full border border-amber-300">
          74 DAX MEASURES
        </div>
      </div>

      {/* Funnel bars */}
      <div className="my-6 grid grid-cols-5 gap-2 h-32 items-end">
        {funnelStages.map((st) => (
          <div key={st.stage} className="flex flex-col items-center gap-1.5">
            <span className="font-mono text-[11px] font-black text-[#111111]">{st.count}</span>
            <motion.div
              className="w-full rounded-t-xl border-2 border-ink/20 shadow-sm"
              style={{
                height: `${(parseFloat(st.count) / 100) * 100}%`,
                backgroundColor: st.color,
              }}
              whileHover={{ scaleY: 1.05 }}
            />
            <span className="font-mono text-[10px] font-bold text-[#111111] text-center leading-tight">
              {st.stage}
            </span>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-white border-2 border-ink/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-xs text-[#111111]">
        <div className="flex items-center gap-2 font-medium">
          <TrendingUp className="w-4 h-4 text-amber-700" />
          <span>A/B Experimentation: 95% Confidence Interval</span>
        </div>
        <span className="font-black text-amber-950 bg-butter px-3 py-1 rounded-xl border border-amber-300">
          115 PYTESTS PASSING
        </span>
      </div>
    </div>
  );
};
