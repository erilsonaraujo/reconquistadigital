"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/appStore";
import { daysData } from "@/data/days";
import { CheckCircle2, Lock, BookOpen, Shield, ChevronRight, Flame } from "lucide-react";
import PanicButton from "@/components/PanicButton";

export default function DashboardPage() {
  const router = useRouter();
  const currentDay = useAppStore((state) => state.currentDay);
  const completedDays = useAppStore((state) => state.completedDays);
  const quizCompleted = useAppStore((state) => state.quizCompleted);

  const [showPanicModal, setShowPanicModal] = useState(false);

  useEffect(() => {
    if (!quizCompleted) {
      router.push("/");
    }
  }, [quizCompleted, router]);

  const progressPercentage = (completedDays.length / 18) * 100;

  const getDayStatus = (dayId: number) => {
    if (completedDays.includes(dayId)) return "completed";
    if (dayId === currentDay) return "current";
    if (dayId < currentDay) return "available";
    return "locked";
  };

  const handleDayClick = (dayId: number) => {
    const status = getDayStatus(dayId);
    if (status !== "locked") {
      router.push(`/dia/${dayId}`);
    }
  };

  const todayContent = daysData.find((d) => d.id === currentDay);

  if (!quizCompleted) return null;

  return (
    <div className="min-h-screen pb-24 relative">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-10 glass-card border-b border-slate-800"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold gradient-text">
                Dia {currentDay} de 18
              </h1>
              <p className="text-slate-400 text-sm">
                {completedDays.length} dias concluídos
              </p>
            </div>
            <Flame className="w-8 h-8 text-amber-400" />
          </div>

          {/* Progress Bar */}
          <div className="relative h-3 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
            />
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Today's Task Card */}
        {todayContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push(`/dia/${currentDay}`)}
            className="glass-card rounded-3xl p-6 cursor-pointer border border-amber-400/30"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-amber-400/20 rounded-2xl">
                <BookOpen className="w-8 h-8 text-amber-400" />
              </div>
              <ChevronRight className="w-6 h-6 text-slate-500" />
            </div>
            <h2 className="text-xl font-semibold text-slate-100 mb-2">
              Tarefa de Hoje
            </h2>
            <p className="text-lg text-amber-400 font-medium mb-4">
              {todayContent.title}
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-2xl font-semibold"
            >
              Ver Conteúdo
            </motion.button>
          </motion.div>
        )}

        {/* Days Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-slate-300 mb-4">
            Sua Jornada
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {daysData.map((day, index) => {
              const status = getDayStatus(day.id);
              return (
                <motion.button
                  key={day.id}
                  whileTap={status !== "locked" ? { scale: 0.95 } : {}}
                  onClick={() => handleDayClick(day.id)}
                  className={`aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-200 ${
                    status === "completed"
                      ? "bg-green-600/20 border border-green-500/50"
                      : status === "current"
                      ? "bg-amber-400/20 border-2 border-amber-400"
                      : status === "available"
                      ? "bg-slate-800/50 border border-slate-700"
                      : "bg-slate-800/30 border border-slate-800 opacity-50"
                  }`}
                >
                  {status === "completed" ? (
                    <CheckCircle2 className="w-6 h-6 text-green-400" />
                  ) : status === "locked" ? (
                    <Lock className="w-5 h-5 text-slate-600" />
                  ) : (
                    <span
                      className={`text-lg font-bold ${
                        status === "current"
                          ? "text-amber-400"
                          : "text-slate-400"
                      }`}
                    >
                      {day.id}
                    </span>
                  )}
                  <span
                    className={`text-xs ${
                      status === "current"
                        ? "text-amber-400 font-semibold"
                        : "text-slate-500"
                    }`}
                  >
                    {status === "current" ? "Hoje" : `Dia ${day.id}`}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </main>

      {/* Floating Action Button - Panic Button */}
      <PanicButton isOpen={showPanicModal} onClose={() => setShowPanicModal(false)} />
      
      {/* FAB */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowPanicModal(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-lg pulse-glow flex items-center justify-center z-20"
      >
        <Shield className="w-8 h-8 text-slate-900" />
      </motion.button>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 glass-card border-t border-slate-800 px-6 py-4 z-10">
        <div className="flex justify-around">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex flex-col items-center gap-1 text-amber-400"
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xs">Jornada</span>
          </button>
          <button
            onClick={() => router.push("/diario")}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="text-xs">Diário</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
