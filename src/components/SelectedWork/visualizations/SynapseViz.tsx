import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, GitMerge, AlertCircle, Check } from 'lucide-react';

export const SynapseViz: React.FC = () => {
  const [activeAlert, setActiveAlert] = useState('PaymentGateway Latency');

  const nodes = [
    { name: 'Gateway', status: 'HEALTHY', lat: '18ms', color: '#CDEBD8' },
    { name: 'Auth Service', status: 'HEALTHY', lat: '24ms', color: '#CDEBD8' },
    { name: 'Payment API', status: 'ANOMALY DETECTED', lat: '420ms', color: '#FFD6C0' },
    { name: 'PostgreSQL DB', status: 'ROOT CAUSE (LOCK)', lat: '890ms', color: '#F4A58A' },
  ];

  return (
    <div className="w-full h-full min-h-[320px] rounded-3xl bg-[#FAF7F2] border-2 border-ink/15 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
      <div className="flex justify-between items-center border-b border-ink/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#111111] font-bold">
            SYNAPSE // ROOT CAUSE INTELLIGENCE
          </span>
        </div>
        <div className="font-mono text-xs text-[#0C4A6E] font-bold bg-powder px-3 py-1 rounded-full border border-sky-300">
          WEBSOCKET STREAM
        </div>
      </div>

      {/* Microservice Topology Mesh */}
      <div className="my-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {nodes.map((n) => (
          <div
            key={n.name}
            className="p-3.5 rounded-2xl border-2 border-ink/15 flex flex-col justify-between gap-1 shadow-sm"
            style={{ backgroundColor: n.color }}
          >
            <div className="flex justify-between items-center">
              <span className="font-mono text-[9px] text-[#443E38] uppercase font-bold">NODE</span>
              <Activity className="w-3.5 h-3.5 text-[#111111]" />
            </div>
            <span className="font-display font-black text-xs text-[#111111]">{n.name}</span>
            <div className="pt-2 border-t border-ink/15 flex justify-between font-mono text-[10px] text-[#111111]">
              <span className="font-medium">Latency</span>
              <span className="font-black">{n.lat}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-white border-2 border-ink/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-xs text-[#111111]">
        <div className="flex items-center gap-2 font-medium">
          <AlertCircle className="w-4 h-4 text-blue-700" />
          <span>Isolation Forest ML + Dynamic Dependency RCA</span>
        </div>
        <span className="font-black text-blue-950 bg-powder px-3 py-1 rounded-xl border border-sky-300">
          ROOT CAUSE ISOLATED IN &lt; 3s
        </span>
      </div>
    </div>
  );
};
