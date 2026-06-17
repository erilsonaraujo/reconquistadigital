"use client";

import { motion } from "framer-motion";
import { useAppStore } from "@/store/appStore";
import { BADGES } from "@/data/badges";

export function BadgesGrid() {
  const { unlockedBadges } = useAppStore();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-4 gap-3"
    >
      {Object.values(BADGES).map((badge) => {
        const isUnlocked = unlockedBadges.includes(badge.id);
        return (
          <motion.div
            key={badge.id}
            variants={item}
            whileHover={isUnlocked ? { scale: 1.1 } : {}}
            className={`relative group cursor-pointer`}
          >
            <div
              className={`p-3 rounded-2xl flex items-center justify-center text-2xl transition-all duration-200 ${
                isUnlocked
                  ? `bg-gradient-to-br ${badge.color} shadow-lg`
                  : "bg-slate-700/50 opacity-40 grayscale"
              }`}
            >
              {badge.icon}
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-slate-900 border border-slate-700 rounded-lg p-2 whitespace-nowrap text-xs text-slate-200 shadow-xl">
                <p className="font-semibold text-white">{badge.name}</p>
                <p className="text-slate-400">{badge.description}</p>
                <p className={`text-xs mt-1 font-semibold ${
                  badge.rarity === 'common' ? 'text-slate-400' :
                  badge.rarity === 'rare' ? 'text-blue-400' :
                  badge.rarity === 'epic' ? 'text-purple-400' :
                  'text-amber-400'
                }`}>
                  {badge.rarity.toUpperCase()}
                </p>
              </div>
            </div>

            {/* Locked Badge Indicator */}
            {!isUnlocked && (
              <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
                <span className="text-sm text-slate-500">🔒</span>
              </div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
