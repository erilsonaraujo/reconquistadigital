"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/store/appStore";
import { Heart, Clock, Target, ArrowRight, Sparkles } from "lucide-react";

const questions = [
  {
    id: 1,
    icon: Clock,
    question: "Há quanto tempo terminou?",
    options: [
      { value: "menos-1-semana", label: "Menos de 1 semana" },
      { value: "1-4-semanas", label: "1 a 4 semanas" },
      { value: "1-3-meses", label: "1 a 3 meses" },
      { value: "mais-3-meses", label: "Mais de 3 meses" },
    ],
  },
  {
    id: 2,
    icon: Heart,
    question: "Quem tomou a iniciativa do término?",
    options: [
      { value: "eu", label: "Eu terminei" },
      { value: "ele-ela", label: "Ele/Ela terminou" },
      { value: "mutuo", label: "Foi mútuo" },
      { value: "situacao", label: "A situação esfriou" },
    ],
  },
  {
    id: 3,
    icon: Target,
    question: "Qual seu maior objetivo agora?",
    options: [
      { value: "reconquistar", label: "Reconquistar a pessoa" },
      { value: "superar", label: "Superar e seguir em frente" },
      { value: "entender", label: "Entender o que aconteceu" },
      { value: "autoconhecimento", label: "Trabalhar meu autoconhecimento" },
    ],
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const completeQuiz = useAppStore((state) => state.completeQuiz);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleOptionSelect = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Finalizar quiz
      completeQuiz({
        timeSinceBreakup: answers[0] || "",
        whoInitiated: answers[1] || "",
        mainGoal: answers[2] || "",
      });
      router.push("/dashboard");
    }
  };

  const canProceed = answers[currentQuestion] !== undefined;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-violet-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-3xl" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <Sparkles className="w-12 h-12 text-amber-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold gradient-text mb-2">
          Reconquista 18 Dias
        </h1>
        <p className="text-slate-400 text-sm">
          Sua jornada de transformação começa aqui
        </p>
      </motion.div>

      {/* Quiz Container */}
      <div className="w-full max-w-md glass-card rounded-3xl p-6 shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Progress indicator */}
            <div className="flex gap-2 mb-6">
              {questions.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    idx <= currentQuestion
                      ? "bg-amber-400"
                      : "bg-slate-700"
                  }`}
                />
              ))}
            </div>

            {/* Question */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-violet-600/20 rounded-xl">
                  {(() => {
                    const Icon = questions[currentQuestion].icon;
                    return <Icon className="w-6 h-6 text-violet-400" />;
                  })()}
                </div>
                <h2 className="text-xl font-semibold text-slate-100">
                  {questions[currentQuestion].question}
                </h2>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <motion.button
                    key={option.value}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleOptionSelect(option.value)}
                    className={`w-full p-4 rounded-2xl text-left transition-all duration-200 border ${
                      answers[currentQuestion] === option.value
                        ? "bg-violet-600 border-violet-500 text-white"
                        : "bg-slate-800/50 border-slate-700 text-slate-300 hover:border-violet-500/50"
                    }`}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={!canProceed}
              className={`w-full py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
                canProceed
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 hover:from-amber-300 hover:to-amber-400"
                  : "bg-slate-700 text-slate-500 cursor-not-allowed"
              }`}
            >
              {currentQuestion < questions.length - 1 ? (
                <>
                  Próxima
                  <ArrowRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  Iniciar Minha Jornada
                  <Sparkles className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-slate-500 text-xs text-center"
      >
        18 dias para se reconectar com seu poder pessoal
      </motion.p>
    </div>
  );
}
