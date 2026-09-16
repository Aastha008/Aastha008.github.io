import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../../hooks/useCursor';
import { Github, Mail, Linkedin, ArrowUpRight } from 'lucide-react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU_ITEMS = [
  { num: '01', label: 'ABOUT', targetId: 'who', color: '#FFD6C0' }, // Peach
  { num: '02', label: 'WORK', targetId: 'work', color: '#F8E7A1' }, // Butter
  { num: '03', label: 'EXPERIMENTS', targetId: 'experiments', color: '#DCCCF5' }, // Lavender
  { num: '04', label: 'TOOLS', targetId: 'skills', color: '#CDEBD8' }, // Mint
  { num: '05', label: 'CONTACT', targetId: 'contact', color: '#C9E7F5' }, // Powder
];

export const FullscreenMenu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const { setCursor, resetCursor } = useCursor();

  const handleNavigate = (targetId: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        if ((window as any).__lenis) {
          (window as any).__lenis.scrollTo(el);
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-xl flex flex-col justify-between p-8 sm:p-16 lg:p-24 overflow-y-auto text-ink border-b border-warm-border"
        >
          {/* Top metadata */}
          <div className="flex justify-between items-center pt-8 border-b border-warm-border pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              AASTHA GUPTA — DIRECTORY
            </span>
            <span className="font-mono text-xs px-3 py-1 rounded-full bg-butter font-bold text-[#111111] border border-ink/10">
              AI ANALYST • MACHINE LEARNING • DATA SYSTEMS
            </span>
          </div>

          {/* Navigation links */}
          <div className="py-12 flex flex-col gap-5 sm:gap-7 my-auto">
            {MENU_ITEMS.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.06 }}
              >
                <button
                  onClick={() => handleNavigate(item.targetId)}
                  onMouseEnter={() => setCursor('click', `GO TO ${item.label}`)}
                  onMouseLeave={resetCursor}
                  className="group flex items-baseline gap-4 sm:gap-8 text-left w-full transition-transform hover:translate-x-3"
                >
                  <span className="font-mono text-sm sm:text-lg text-ink-muted group-hover:text-ink font-bold">
                    {item.num}
                  </span>
                  <span
                    className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight transition-colors px-3 py-1 rounded-2xl"
                    style={{ backgroundColor: 'transparent' }}
                  >
                    <span className="group-hover:px-4 group-hover:py-1 group-hover:rounded-2xl transition-all" style={{ backgroundColor: item.color }}>
                      {item.label}
                    </span>
                  </span>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8 sm:w-12 sm:h-12 text-ink ml-2" />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Bottom links */}
          <div className="pt-8 border-t border-warm-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 font-mono text-xs tracking-wider">
              <a
                href="https://github.com/Aastha008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ink hover:text-ink/70 font-semibold"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB (Aastha008)</span>
              </a>
              <a
                href="mailto:aasthagupta0408@gmail.com"
                className="flex items-center gap-2 text-ink hover:text-ink/70 font-semibold"
              >
                <Mail className="w-4 h-4" />
                <span>aasthagupta0408@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/aastha-gupta-a8b310344/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ink hover:text-ink/70 font-semibold"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
              </a>
            </div>

            <div className="font-mono text-xs text-ink-muted">
              VIT VELLORE • B.Tech CSE (IoT)
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
