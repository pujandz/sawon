'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const springX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.4 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    setMounted(true);
    document.documentElement.classList.add('cursor-hidden');

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const el = (e.target as Element).closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
      );
      setIsHovering(!!el);
    };

    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    return () => {
      document.documentElement.classList.remove('cursor-hidden');
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full border"
          animate={{
            width: isHovering ? 46 : isClicking ? 18 : 30,
            height: isHovering ? 46 : isClicking ? 18 : 30,
            borderColor: isClicking
              ? 'rgba(34,197,94,1)'
              : isHovering
              ? 'rgba(34,197,94,0.7)'
              : 'rgba(34,197,94,0.5)',
            backgroundColor: isHovering ? 'rgba(34,197,94,0.08)' : 'transparent',
          }}
          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* Dot — follows exactly */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full bg-primary-400"
          animate={{
            width: isHovering ? 6 : isClicking ? 10 : 6,
            height: isHovering ? 6 : isClicking ? 10 : 6,
            scale: isClicking ? 1.4 : 1,
            opacity: isHovering ? 0.9 : 1,
          }}
          transition={{ duration: 0.12 }}
        />
      </motion.div>
    </>
  );
}
