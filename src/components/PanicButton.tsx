"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Wind } from "lucide-react";
import { useState } from "react";

interface PanicButtonProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PanicButton({ isOpen, onClose }: PanicButtonProps) {
  const [phase, setPhase] = useState<"inhale" | "hold" | "exhale">("inhale");
  const [count, setCount] = useState(4);

  // Breathing cycle: 4-7-8 technique
  useState(() => {
    if (!isOpen) return;

    const inhaleTime = 4000;
    const holdTime = 7000;
    const exhaleTime = 8000;

    const runCycle = async () => {
      setPhase("inhale");
      setCount(4);
      await sleep(inhaleTime);
      
      setPhase("hold");
      setCount(7);
      await sleep(holdTime);
      
      setPhase("exhale");
      setCount(8);
      await sleep(exhaleTime);
      
      runCycle();
    };

    runCycle();

    return () => {};
  });

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
            className="fixed inset-0 bg-black/80 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-md glass-card rounded-3xl p-6 z-50 flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold gradient-text mb-2">
                Botão de Pânico
              </h2>
              <p className="text-slate-400 text-sm">
                Respire fundo e se acalme
              </p>
            </div>

            {/* Breathing Circle Animation */}
            <div className="relative w-48 h-48 flex items-center justify-center mb-8">
              {/* Outer rings */}
              <motion.div
                animate={{
                  scale: phase === "inhale" ? 1.2 : phase === "hold" ? 1.2 : 0.8,
                  opacity: phase === "inhale" ? 0.8 : 0.3,
                }}
                transition={{ duration: phase === "inhale" ? 4 : phase === "hold" ? 0.5 : 8 }}
                className="absolute w-32 h-32 rounded-full border-2 border-amber-400/30"
              />
              <motion.div
                animate={{
                  scale: phase === "inhale" ? 1.3 : phase === "hold" ? 1.3 : 0.7,
                  opacity: phase === "inhale" ? 0.6 : 0.2,
                }}
                transition={{ duration: phase === "inhale" ? 4 : phase === "hold" ? 0.5 : 8 }}
                className="absolute w-24 h-24 rounded-full border-2 border-amber-400/40"
              />
              
              {/* Main breathing circle */}
              <motion.div
                animate={{
                  scale: phase === "inhale" ? 1.5 : phase === "hold" ? 1.5 : 0.5,
                }}
                transition={{ 
                  duration: phase === "inhale" ? 4 : phase === "hold" ? 0.5 : 8,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 breathe flex items-center justify-center"
              >
                <Wind className="w-8 h-8 text-slate-900" />
              </motion.div>
            </div>

            {/* Phase Indicator */}
            <motion.div
              key={phase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-6"
            >
              <p className="text-2xl font-bold text-amber-400 mb-1">
                {phase === "inhale" && "Inspire..."}
                {phase === "hold" && "Segure..."}
                {phase === "exhale" && "Expire..."}
              </p>
              <p className="text-slate-400 text-sm">
                Técnica 4-7-8
              </p>
            </motion.div>

            {/* Calming Message */}
            <div className="glass-card rounded-2xl p-4 w-full mb-6">
              <p className="text-slate-300 text-center text-sm leading-relaxed">
                "Este momento é temporário. Você já superou dias difíceis antes e 
                vai superar este também. Respire. Confie no processo."
              </p>
            </div>

            {/* Close Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="w-full py-3 bg-slate-800 text-slate-300 rounded-2xl font-semibold hover:bg-slate-700 transition-colors"
            >
              Fechar
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
