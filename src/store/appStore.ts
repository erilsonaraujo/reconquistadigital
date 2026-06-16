import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface QuizAnswers {
  timeSinceBreakup: string;
  whoInitiated: string;
  mainGoal: string;
}

interface AppState {
  currentDay: number;
  completedDays: number[];
  quizCompleted: boolean;
  quizAnswers: QuizAnswers | null;
  setCurrentDay: (day: number) => void;
  markDayAsCompleted: (day: number) => void;
  completeQuiz: (answers: QuizAnswers) => void;
  resetProgress: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentDay: 1,
      completedDays: [],
      quizCompleted: false,
      quizAnswers: null,
      
      setCurrentDay: (day) => set({ currentDay: day }),
      
      markDayAsCompleted: (day) => set((state) => {
        const newCompletedDays = state.completedDays.includes(day)
          ? state.completedDays
          : [...state.completedDays, day];
        
        // Unlock next day if completing current day
        let newCurrentDay = state.currentDay;
        if (day === state.currentDay && day < 18) {
          newCurrentDay = day + 1;
        }
        
        return {
          completedDays: newCompletedDays,
          currentDay: newCurrentDay,
        };
      }),
      
      completeQuiz: (answers) => set({ quizCompleted: true, quizAnswers: answers }),
      
      resetProgress: () => set({
        currentDay: 1,
        completedDays: [],
        quizCompleted: false,
        quizAnswers: null,
      }),
    }),
    {
      name: 'reconquista-18-dias-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
