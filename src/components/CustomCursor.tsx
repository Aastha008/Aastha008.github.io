import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../hooks/useCursor';

export const CustomCursor: React.FC = () => {
  const { cursorMode, cursorText } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updateMousePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const isExpanded = cursorMode !== 'default';

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Main cursor pill */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none font-mono font-bold text-[10px] tracking-wider uppercase shadow-pastel"
        animate={{
          x: mousePosition.x - (isExpanded ? 46 : 7),
          y: mousePosition.y - (isExpanded ? 46 : 7),
          width: isExpanded ? 92 : 14,
          height: isExpanded ? 92 : 14,
          backgroundColor: isExpanded ? '#1E1B18' : '#F4A58A',
          color: isExpanded ? '#FAF7F2' : '#1E1B18',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 350,
          mass: 0.4,
        }}
      >
        {isExpanded && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center px-2 leading-tight font-semibold"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Trailing soft outline */}
      {!isExpanded && (
        <motion.div
          className="fixed top-0 left-0 rounded-full border border-coral/50 pointer-events-none"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            width: 32,
            height: 32,
          }}
          transition={{
            type: 'spring',
            damping: 28,
            stiffness: 220,
            mass: 0.6,
          }}
        />
      )}
    </div>
  );
};
