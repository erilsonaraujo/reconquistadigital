"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useAppStore } from "@/store/appStore";
import { daysData } from "@/data/days";
import { Brain, Sparkles, Flame, CheckCircle, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

export default function DayContentPage() {
  const params = useParams();
  const router = useRouter();
  const dayId = parseInt(params.id as string);
  
  const markDayAsCompleted = useAppStore((state) => state.markDayAsCompleted);
  const completedDays = useAppStore((state) => state.completedDays);
  const currentDay = useAppStore((state) => state.currentDay);

  const [activeSection, setActiveSection] = useState<number | null>(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const dayContent = daysData.find((d) => d.id === dayId);

  useEffect(() => {
    if (dayId > currentDay) {
      router.push("/dashboard");
    }
  }, [dayId, currentDay, router]);

  const handleComplete = () => {
    markDayAsCompleted(dayId);
    setIsCompleted(true);
  };

  if (!dayContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-400">Conteúdo não encontrado</p>
      </div>
    );
  };

  const sections = [
    {
      id: 0,
      icon: Brain,
      title: "🧠 Psicologia do Dia",
      content: dayContent.psychology,
      color: "violet",
    },
    {
      id: 1,
      icon: Sparkles,
      title: "🔮 Tarot & Energia",
      content: dayContent.tarot,
      color: "amber",
    },
    {
      id: 2,
      icon: Flame,
      title: "🕯️ Ritual Prático",
      content: dayContent.ritual,
      color: "orange",
    },
  ];

  const isAlreadyCompleted = completedDays.includes(dayId);

  return (
    <div className="min-h-screen pb-32">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-10 glass-card border-b border-slate-800"
      >
        <div className="p-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-400 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-400/20 rounded-2xl">
              <span className="text-2xl">📅</span>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Dia {dayId} de 18</p>
              <h1 className="text-xl font-bold text-slate-100">{dayContent.title}</h1>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Content Sections */}
      <main className="p-6 space-y-4">
        <AnimatePresence>
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${
                    section.color === "violet" ? "bg-violet-600/20" :
                    section.color === "amber" ? "bg-amber-400/20" :
                    "bg-orange-400/20"
                  }`}>
                    <section.icon className={`w-5 h-5 ${
                      section.color === "violet" ? "text-violet-400" :
                      section.color === "amber" ? "text-amber-400" :
                      "text-orange-400"
                    }`} />
                  </div>
                  <span className="font-semibold text-slate-200">{section.title}</span>
                </div>
                {activeSection === section.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>
              
              <AnimatePresence>
                {activeSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 text-slate-300 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </main>

      {/* Complete Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="fixed bottom-20 left-0 right-0 p-6 glass-card border-t border-slate-800"
      >
        {isAlreadyCompleted ? (
          <div className="flex items-center justify-center gap-2 text-green-400 py-3">
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">Dia concluído!</span>
          </div>
        ) : isCompleted ? (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="flex items-center justify-center gap-2 text-green-400 py-3"
          >
            <CheckCircle className="w-6 h-6" />
            <span className="font-semibold">Parabéns! Dia {dayId} concluído!</span>
          </motion.div>
        ) : (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleComplete}
            className="w-full py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-2xl font-semibold flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Marcar como Concluído
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
