import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../hooks/useCursor';

interface HeaderProps {
  onOpenMenu: () => void;
  isMenuOpen: boolean;
}

export const MinimalHeader: React.FC<HeaderProps> = ({ onOpenMenu, isMenuOpen }) => {
  const { setCursor, resetCursor } = useCursor();

  const scrollToTop = () => {
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-6 flex items-center justify-between pointer-events-none">
      {/* Monogram AG */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-auto flex items-center gap-3"
      >
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setCursor('click', 'TOP ↑')}
          onMouseLeave={resetCursor}
          className="group flex items-center gap-3 text-ink transition-opacity hover:opacity-80"
          aria-label="Scroll to top"
        >
          <span className="font-display font-extrabold text-2xl tracking-tighter bg-butter px-2.5 py-0.5 rounded-lg border border-ink/10 shadow-sm">
            AG
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-ink-muted tracking-widest uppercase">
            Aastha Gupta
          </span>
        </button>
      </motion.div>

      {/* Status + Menu Trigger */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="pointer-events-auto flex items-center gap-4 sm:gap-6"
      >
        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] text-[#111111] bg-white px-3 py-1.5 rounded-full border border-ink/15 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>VIT VELLORE • AI &amp; COMPUTER SCIENCE</span>
        </div>

        <button
          onClick={onOpenMenu}
          onMouseEnter={() => setCursor('click', isMenuOpen ? 'CLOSE' : 'MENU')}
          onMouseLeave={resetCursor}
          className="group flex items-center gap-2.5 px-5 py-2 rounded-full bg-ink hover:bg-ink/90 text-white transition-all shadow-pastel"
          aria-label="Toggle navigation menu"
        >
          <span className="font-mono text-xs uppercase tracking-widest font-semibold">
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </span>
          <div className="flex flex-col gap-1 w-3.5 items-end">
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-3.5 rotate-45 translate-y-1.5' : 'w-3.5'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-2 group-hover:w-3.5'}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-3.5 -rotate-45 -translate-y-1.5' : 'w-3'}`} />
          </div>
        </button>
      </motion.div>
    </header>
  );
};
