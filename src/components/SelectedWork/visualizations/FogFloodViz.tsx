import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const FogFloodViz: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { label: 'SENSORS', desc: 'Raindrop, Moisture, DHT11', badge: 'EDGE TELEMETRY' },
    { label: 'EDGE', desc: 'ESP32 Microcontroller', badge: 'LOCAL PROCESSING' },
    { label: 'MODEL', desc: 'Quantized TensorFlow Lite', badge: 'ON-CHIP INFERENCE' },
    { label: 'RISK', desc: 'Safe / Warning / Flood', badge: 'CLASSIFICATION' },
    { label: 'ALERT', desc: 'Local Siren + Blynk IoT', badge: 'ZERO-CLOUD TRIGGER' },
  ];

  useEffect(() => {
    const int = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(int);
  }, [steps.length]);

  return (
    <div className="w-full h-full min-h-[320px] rounded-2xl bg-black/40 border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative">
      <div className="flex justify-between items-center border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-wider text-white/70">
            ESP32 EDGE NEURAL PIPELINE
          </span>
        </div>
        <div className="font-mono text-xs text-emerald-400 font-bold">
          ACCURACY: 96.7%
        </div>
      </div>

      {/* Step Flow Pipeline */}
      <div className="my-6 flex flex-col sm:flex-row items-center justify-between gap-3 relative">
        {steps.map((st, i) => {
          const isActive = activeStep === i;
          return (
            <div
              key={st.label}
              className="flex-1 w-full p-3 rounded-xl border transition-all duration-300 relative flex flex-col gap-1"
              style={{
                backgroundColor: isActive ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                borderColor: isActive ? '#10b981' : 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] text-white/40">0{i + 1}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
              </div>
              <span className={`font-display font-bold text-sm sm:text-base ${isActive ? 'text-emerald-300' : 'text-white/80'}`}>
                {st.label}
              </span>
              <span className="text-[11px] text-white/50 leading-tight">
                {st.desc}
              </span>
            </div>
          );
        })}
      </div>

      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 font-mono text-xs">
        <div>
          <span className="text-white/50">RESEARCH:</span>
          <span className="text-white font-medium ml-2">VIT Vellore IEEE Conference Paper</span>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
          96.7% CLASSIFICATION ACCURACY
        </span>
      </div>
    </div>
  );
};
