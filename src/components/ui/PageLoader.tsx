'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(true);

  useEffect(() => {
    // Fade out content first, then slide curtain away
    const fadeTimer = setTimeout(() => setContentVisible(false), 1700);
    const exitTimer = setTimeout(() => setLoading(false), 2200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[10000] bg-[#0a0a0a] flex items-center justify-center"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: EASE }}
        >
          <AnimatePresence>
            {contentVisible && (
              <motion.div
                className="flex flex-col items-center gap-8"
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                {/* Logo */}
                <motion.div
                  className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center text-black font-black text-3xl font-heading relative"
                  initial={{ scale: 0, rotate: -120, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  S
                  {/* Pulse rings */}
                  <motion.span
                    className="absolute inset-0 rounded-full border border-primary-500/40"
                    animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                    aria-hidden="true"
                  />
                  <motion.span
                    className="absolute inset-0 rounded-full border border-primary-500/20"
                    animate={{ scale: [1, 2], opacity: [0.4, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut', delay: 0.3 }}
                    aria-hidden="true"
                  />
                </motion.div>

                {/* Name + subtitle */}
                <motion.div
                  className="text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.55, ease: EASE }}
                >
                  <h1 className="text-2xl font-black font-heading text-white tracking-tight">
                    Sawon Saha
                  </h1>
                  <p className="text-primary-400 text-xs uppercase tracking-[0.25em] font-medium">
                    SEO &amp; AEO Specialist
                  </p>
                </motion.div>

                {/* Progress bar */}
                <motion.div
                  className="w-52 h-px bg-[#1e1e1e] rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-600 via-primary-400 to-primary-500 rounded-full"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.55, duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
