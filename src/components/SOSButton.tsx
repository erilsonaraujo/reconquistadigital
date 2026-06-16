'use client';

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { useState } from 'react';
import BreathingModal from './BreathingModal';

export default function SOSButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.button
        onClick={() => setIsModalOpen(true)}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-lg flex items-center justify-center z-40 pulse-glow hover:shadow-amber-500/50 transition-shadow"
        aria-label="Botão de Pânico SOS"
      >
        <Shield className="text-slate-900" size={28} strokeWidth={2.5} />
      </motion.button>

      <BreathingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
