'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface BreathingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BreathingModal({ isOpen, onClose }: BreathingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          >
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 max-w-md mx-4 pointer-events-auto relative overflow-hidden">
              {/* Close button */}
              <motion.button
                onClick={onClose}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-200 transition-colors"
              >
                <X size={24} />
              </motion.button>

              {/* Title */}
              <h2 className="text-2xl font-semibold text-center text-slate-100 mb-2">
                Respire Consciente
              </h2>
              <p className="text-slate-400 text-center text-sm mb-8">
                Você está no controle. Não mande mensagem agora.
              </p>

              {/* Breathing Circle Animation */}
              <div className="flex flex-col items-center justify-center mb-8">
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1.5, 1],
                    opacity: [0.6, 1, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 19,
                    times: [0, 0.21, 0.58, 1],
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-400/30 to-violet-600/30 border-2 border-amber-400/50 flex items-center justify-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1.3, 1],
                    }}
                    transition={{
                      duration: 19,
                      times: [0, 0.21, 0.58, 1],
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-violet-600"
                  />
                </motion.div>

                {/* Breathing Instructions */}
                <motion.div
                  animate={{
                    opacity: [1, 0.5, 0.5, 1],
                  }}
                  transition={{
                    duration: 19,
                    times: [0, 0.21, 0.58, 1],
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="mt-8 text-center"
                >
                  <motion.p
                    animate={{
                      y: [0, -5, -5, 0],
                    }}
                    transition={{
                      duration: 19,
                      times: [0, 0.21, 0.58, 1],
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="text-amber-400 font-medium text-lg"
                  >
                    Inspire... Segure... Expire...
                  </motion.p>
                  <p className="text-slate-500 text-xs mt-2">4 segundos • 7 segundos • 8 segundos</p>
                </motion.div>
              </div>

              {/* Progress indicator */}
              <div className="flex justify-center gap-2 mb-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: i === 0 ? [1, 1.2, 1, 1] : i === 1 ? [1, 1, 1.2, 1] : [1, 1, 1, 1.2],
                      backgroundColor: i === 0
                        ? ['rgba(251,191,36,0.5)', 'rgba(251,191,36,1)', 'rgba(251,191,36,0.5)', 'rgba(251,191,36,0.5)']
                        : i === 1
                        ? ['rgba(251,191,36,0.5)', 'rgba(251,191,36,0.5)', 'rgba(251,191,36,1)', 'rgba(251,191,36,0.5)']
                        : ['rgba(251,191,36,0.5)', 'rgba(251,191,36,0.5)', 'rgba(251,191,36,0.5)', 'rgba(251,191,36,1)'],
                    }}
                    transition={{
                      duration: 19,
                      times: [0, 0.21, 0.58, 1],
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: 'rgba(251,191,36,0.5)' }}
                  />
                ))}
              </div>

              {/* Calming message */}
              <p className="text-slate-400 text-xs text-center italic">
                "Esta urgência vai passar. Você é mais forte que este impulso."
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
