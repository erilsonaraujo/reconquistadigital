"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/appStore";
import { BADGES } from "@/data/badges";
import { ArrowLeft, Trophy, Flame, Sparkles, Heart } from "lucide-react";

export default function AchievementsPage() {
  const router = useRouter();
  const { currentLevel, totalXP, unlockedBadges, currentStreak, achievements } = useAppStore();

  const categories = [
    { id: 'streak', name: '🔥 Sequência', icon: Flame, color: 'from-orange-400 to-red-600', description: 'Desbloqueadas por manter consistência' },
    { id: 'level', name: '⭐ Níveis', icon: Sparkles, color: 'from-blue-400 to-purple-600', description: 'Ganhe XP e suba de nível' },
    { id: 'activity', name: '📚 Atividade', icon: Trophy, color: 'from-amber-400 to-yellow-600', description: 'Complete atividades para ganhar' },
    { id: 'emotional', name: '💚 Jornada Emocional', icon: Heart, color: 'from-pink-400 to-rose-600', description: 'Escolhas que refletem sua jornada' },
  ];

  const getBadgesByCategory = (categoryId: string) => {
    return Object.values(BADGES).filter((b) => b.category === categoryId);
  };

  const getUnlockedInCategory = (categoryId: string) => {
    return Object.values(BADGES).filter(
      (b) => b.category === categoryId && unlockedBadges.includes(b.id)
    ).length;
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen p-6 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4 mb-8"
      >
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-slate-800 rounded-xl transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-slate-300" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-slate-100">Suas Conquistas</h1>
          <p className="text-slate-400">Celebre sua jornada de transformação</p>
        </div>
      </motion.div>

      {/* Stats Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-4 mb-8"
      >
        <div className="glass-card rounded-2xl p-4 text-center">
          <p className="text-3xl font-bold text-violet-400">{currentLevel}</p>
          <p className="text-sm text-slate-400 mt-1">Nível Atual</p>
        </div>
        <div className="glass-card rounded-2xl p-4 text-center">
          <p className="text-3xl font-bold text-amber-400">{unlockedBadges.length}</p>
          <p className="text-sm text-slate-400 mt-1">Badges Desbloqueadas</p>
        </div>
        <div className="glass-card rounded-2xl p-4 text-center">
          <p className="text-3xl font-bold text-orange-400">{currentStreak}</p>
          <p className="text-sm text-slate-400 mt-1">Dias Consecutivos</p>
        </div>
      </motion.div>

      {/* Badges by Category */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {categories.map((category, idx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className="glass-card rounded-3xl p-6 border border-slate-700/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-100">{category.name}</h2>
                <p className="text-sm text-slate-400">{category.description}</p>
              </div>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {getBadgesByCategory(category.id).map((badge) => {
                const isUnlocked = unlockedBadges.includes(badge.id);
                return (
                  <motion.div
                    key={badge.id}
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
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      <div className="bg-slate-900 border border-slate-700 rounded-lg p-2 whitespace-nowrap text-xs text-slate-200 shadow-xl">
                        <p className="font-semibold text-white">{badge.name}</p>
                        <p className="text-slate-400">{badge.description}</p>
                      </div>
                    </div>

                    {!isUnlocked && (
                      <div className="absolute inset-0 rounded-2xl flex items-center justify-center">
                        <span className="text-sm">🔒</span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Progress Info */}
            <div className="pt-4 border-t border-slate-700/50">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">
                  {getUnlockedInCategory(category.id)} de {getBadgesByCategory(category.id).length} desbloqueadas
                </span>
                <span className="text-slate-500">
                  {Math.round(
                    (getUnlockedInCategory(category.id) / getBadgesByCategory(category.id).length) * 100
                  )}%
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Achievements */}
      {achievements.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 glass-card rounded-3xl p-6 border border-slate-700/50"
        >
          <h2 className="text-xl font-bold text-slate-100 mb-4">Conquistas Recentes</h2>
          <div className="space-y-3">
            {achievements.slice().reverse().slice(0, 5).map((achievement) => (
              <div
                key={achievement.id}
                className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl"
              >
                <span className="text-2xl">{achievement.title}</span>
                <div className="flex-1">
                  <p className="text-sm text-slate-100">{achievement.description}</p>
                  <p className="text-xs text-slate-500">
                    {new Date(achievement.unlockedAt).toLocaleDateString("pt-BR")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
