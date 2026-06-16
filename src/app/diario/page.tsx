"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/appStore";
import { BookOpen, Save, ArrowLeft } from "lucide-react";

export default function DiarioPage() {
  const router = useRouter();
  const saveDiaryEntry = useAppStore((state) => state.saveDiaryEntry);
  const getDiaryEntry = useAppStore((state) => state.getDiaryEntry);
  const diaryEntries = useAppStore((state) => state.diaryEntries);
  
  const [content, setContent] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  // Load today's entry on mount
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const todayEntry = getDiaryEntry(today);
    if (todayEntry) {
      setContent(todayEntry);
    }
  }, [getDiaryEntry]);

  const handleSave = () => {
    if (!content.trim()) return;

    const today = new Date().toISOString().split("T")[0];
    saveDiaryEntry(today, content);
    
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  // Auto-save every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (content.trim()) {
        handleSave();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [content]);

  // Get entries as array for display
  const entriesArray = Object.entries(diaryEntries)
    .map(([date, content]) => ({ date, content }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur-md border-b border-slate-800"
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
            <div className="p-3 bg-violet-600/20 rounded-2xl">
              <BookOpen className="w-6 h-6 text-violet-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-100">Diário Emocional</h1>
              <p className="text-slate-400 text-sm">
                {new Date().toLocaleDateString("pt-BR", { 
                  weekday: "long", 
                  year: "numeric", 
                  month: "long", 
                  day: "numeric" 
                })}
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Content */}
      <main className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-4"
        >
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Como você está se sentindo hoje? Escreva livremente sobre seus pensamentos, emoções e descobertas..."
            className="w-full h-64 bg-transparent text-slate-200 placeholder-slate-500 resize-none focus:outline-none leading-relaxed"
          />
        </motion.div>

        {/* Auto-save indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isSaved ? 1 : 0 }}
          className="flex items-center justify-center gap-2 mt-4 text-green-400"
        >
          <Save className="w-4 h-4" />
          <span className="text-sm">Salvo automaticamente</span>
        </motion.div>

        {/* Previous entries preview */}
        {entriesArray.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <h3 className="text-lg font-semibold text-slate-300 mb-4">
              Entradas Anteriores
            </h3>
            <div className="space-y-3">
              {entriesArray.slice(0, 5).map((entry, index) => (
                <motion.button
                  key={entry.date}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    setContent(entry.content);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-left hover:bg-slate-800/50 transition-colors"
                >
                  <p className="text-amber-400 text-sm font-medium mb-1">
                    {new Date(entry.date).toLocaleDateString("pt-BR")}
                  </p>
                  <p className="text-slate-400 text-sm line-clamp-2">
                    {entry.content}
                  </p>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </main>

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed bottom-20 left-0 right-0 p-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-800"
      >
        <motion.button
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={handleSave}
          disabled={!content.trim()}
          className={`w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all ${
            content.trim()
              ? "bg-gradient-to-r from-violet-600 to-violet-700 text-white shadow-lg shadow-violet-600/25"
              : "bg-slate-800 text-slate-600 cursor-not-allowed"
          }`}
        >
          <Save className="w-5 h-5" />
          {isSaved ? "Salvo!" : "Salvar Entrada"}
        </motion.button>
      </motion.div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-t border-slate-800 px-6 py-4 z-10">
        <div className="flex justify-around">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-medium">Jornada</span>
          </button>
          <button
            onClick={() => router.push("/diario")}
            className="flex flex-col items-center gap-1 text-amber-400"
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
