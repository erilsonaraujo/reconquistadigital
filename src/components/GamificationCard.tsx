"use client";

import { motion } from "framer-motion";
import { useAppStore } from "@/store/appStore";
import { Sparkles, Zap, Trophy, Flame } from "lucide-react";

export function GamificationCard() {
  const { currentLevel, totalXP, xpForNextLevel, currentStreak, unlockedBadges } = useAppStore();
  
  const xpProgress = (totalXP / xpForNextLevel) * 100;
  const levelPercentage = ((totalXP % xpForNextLevel) / xpForNextLevel) * 100;

  return (
    <div className="space-y-4">
      {/* Main Level Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-3xl p-6 bg-gradient-to-br from-violet-600/20 to-purple-600/10 border border-violet-500/30"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-violet-600/30 rounded-xl">
              <Sparkles className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <p className="text-sm text-slate-400">Nível</p>
              <p className="text-3xl font-bold text-violet-400">{currentLevel}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-400">Experiência</p>
            <p className="text-2xl font-bold text-amber-400">{totalXP} XP</p>
          </div>
        </div>

        {/* XP Progress Bar */}
        <div className="space-y-2">
          <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${levelPercentage}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-violet-400 to-violet-600 rounded-full"
            />
          </div>
          <p className="text-xs text-slate-500">
            {Math.floor((totalXP % xpForNextLevel))} / {xpForNextLevel} XP para próximo nível
          </p>
        </div>
      </motion.div>

      {/* Streak & Badges */}
      <div className="grid grid-cols-2 gap-4">
        {/* Streak */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card rounded-2xl p-4 bg-gradient-to-br from-orange-600/20 to-red-600/10 border border-orange-500/30"
        >
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <p className="text-sm text-slate-400">Sequência</p>
          </div>
          <p className="text-2xl font-bold text-orange-400">{currentStreak} dias</p>
          <p className="text-xs text-slate-500 mt-1">Mantenha aceso! 🔥</p>
        </motion.div>

        {/* Badges Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl p-4 bg-gradient-to-br from-amber-600/20 to-yellow-600/10 border border-amber-500/30"
        >
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <p className="text-sm text-slate-400">Conquistas</p>
          </div>
          <p className="text-2xl font-bold text-amber-400">{unlockedBadges.length}</p>
          <p className="text-xs text-slate-500 mt-1">Continue desbloqueando!</p>
        </motion.div>
      </div>
    </div>
  );
}
