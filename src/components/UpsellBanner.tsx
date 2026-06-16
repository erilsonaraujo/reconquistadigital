'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function UpsellBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-gradient-to-r from-amber-500/10 to-violet-600/10 border border-amber-400/30 rounded-2xl p-4 mt-6"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0">
          <Sparkles size={20} className="text-amber-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-slate-100 mb-1">
            🔥 Acelere sua Reconquista
          </h3>
          <p className="text-xs text-slate-400 mb-3">
            Desbloqueie o <strong className="text-amber-400">Pack de 50 Mensagens Prontas</strong> para cada situação
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-semibold py-2.5 px-4 rounded-xl text-sm hover:shadow-lg hover:shadow-amber-500/25 transition-shadow"
          >
            Desbloquear por R$ 47,90
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
