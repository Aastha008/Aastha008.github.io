import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../hooks/useCursor';
import { Github, Mail, Linkedin, ArrowUpRight } from 'lucide-react';

export const FinalSection: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <footer id="contact" className="relative min-h-screen py-28 sm:py-36 px-6 sm:px-12 lg:px-24 border-t border-warm-border bg-[#FFF6E3] flex flex-col justify-between">
      {/* Top Tag */}
      <div className="flex items-center gap-3 font-mono text-xs text-amber-900 tracking-widest uppercase mb-12 font-bold">
        <span className="w-2.5 h-2.5 rounded-full bg-coral animate-ping" />
        <span>FINAL SECTION — LET'S CONNECT</span>
      </div>

      {/* Center Monumental Typography */}
      <div className="my-auto py-12">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-6xl sm:text-8xl lg:text-[9.5rem] tracking-tight leading-[0.88] text-ink uppercase"
        >
          LET'S<br />
          MAKE<br />
          <span className="inline-block px-5 py-1 rounded-3xl bg-butter mt-1 shadow-sm">
            SOMETHING
          </span><br />
          COOL.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 font-sans text-xl sm:text-2xl text-ink font-normal max-w-xl leading-relaxed"
        >
          Have an interesting problem?<br />
          Let's talk.
        </motion.p>
      </div>

      {/* Buttons & Sign-off */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 pt-12 border-t border-amber-200/80">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:aasthagupta0408@gmail.com"
            onMouseEnter={() => setCursor('open', 'EMAIL ↗')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 px-7 py-4 rounded-full bg-ink text-white font-mono text-xs uppercase tracking-wider font-bold hover:bg-ink/90 shadow-pastel transition-transform hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL ME →</span>
          </a>

          <a
            href="https://github.com/Aastha008"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursor('open', 'GITHUB ↗')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 px-7 py-4 rounded-full bg-white border border-warm-border text-ink font-mono text-xs uppercase tracking-wider font-bold hover:border-ink shadow-pastel transition-transform hover:scale-105"
          >
            <Github className="w-4 h-4" />
            <span>GITHUB →</span>
          </a>

          <a
            href="https://www.linkedin.com/in/aastha-gupta-a8b310344/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursor('open', 'LINKEDIN ↗')}
            onMouseLeave={resetCursor}
            className="flex items-center gap-2 px-7 py-4 rounded-full bg-white border border-warm-border text-ink font-mono text-xs uppercase tracking-wider font-bold hover:border-ink shadow-pastel transition-transform hover:scale-105"
          >
            <Linkedin className="w-4 h-4" />
            <span>LINKEDIN →</span>
          </a>
        </div>

        <div className="font-mono text-xs text-[#111111] flex flex-col sm:items-end gap-1 font-semibold">
          <span className="font-bold">AASTHA GUPTA © {new Date().getFullYear()}</span>
          <span>Computer Science &amp; Data Systems • VIT Vellore</span>
        </div>
      </div>
    </footer>
  );
};
