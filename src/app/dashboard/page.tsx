"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/appStore";
import { daysContent } from "@/data/daysContent";
import { BookOpen, Shield, Flame } from "lucide-react";
import DayCard from "@/components/DayCard";
import SOSButton from "@/components/SOSButton";
import UpsellBanner from "@/components/UpsellBanner";
import ProgressBar from "@/components/ProgressBar";

export default function DashboardPage() {
  const router = useRouter();
  const currentDay = useAppStore((state) => state.currentDay);
  const completedDays = useAppStore((state) => state.completedDays);
  const quizCompleted = useAppStore((state) => state.quizCompleted);

  useEffect(() => {
    if (!quizCompleted) {
      router.push("/");
    }
  }, [quizCompleted, router]);

  const getDayStatus = (dayId: number) => {
    if (completedDays.includes(dayId)) return "completed";
    if (dayId === currentDay) return "current";
    if (dayId < currentDay) return "available";
    return "locked";
  };

  const todayContent = daysContent.find((d) => d.day === currentDay);

  if (!quizCompleted) return null;

  return (
    <div className="min-h-screen pb-24 relative">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur-md border-b border-slate-800"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-100">
                Dia <span className="text-amber-400">{currentDay}</span> de 18
              </h1>
              <p className="text-slate-400 text-sm">
                {completedDays.length} dias concluídos
              </p>
            </div>
            <Flame className="w-8 h-8 text-amber-400" />
          </div>

          {/* Progress Bar */}
          <ProgressBar current={completedDays.length} total={18} />
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
            className="bg-gradient-to-br from-slate-900 to-slate-800 border border-amber-400/30 rounded-3xl p-6 cursor-pointer shadow-xl"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-amber-400/20 rounded-2xl">
                <BookOpen className="w-8 h-8 text-amber-400" />
              </div>
            </div>
            <h2 className="text-xl font-semibold text-slate-100 mb-2">
              Tarefa de Hoje
            </h2>
            <p className="text-lg text-amber-400 font-medium mb-4">
              {todayContent.title}
            </p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-full py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-2xl font-semibold shadow-lg shadow-amber-500/25"
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
            Sua Jornada Completa
          </h3>
          <div className="space-y-3">
            {daysContent.map((day) => {
              const status = getDayStatus(day.day);
              return (
                <DayCard
                  key={day.day}
                  day={day.day}
                  title={day.title}
                  isCompleted={status === "completed"}
                  isCurrent={status === "current"}
                  isLocked={status === "locked"}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Upsell Banner */}
        <UpsellBanner />
      </main>

      {/* Floating Action Button - SOS */}
      <SOSButton />

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 px-6 py-4 z-10">
        <div className="flex justify-around">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex flex-col items-center gap-1 text-amber-400"
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-medium">Jornada</span>
          </button>
          <button
            onClick={() => router.push("/diario")}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="text-xs font-medium">Diário</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
