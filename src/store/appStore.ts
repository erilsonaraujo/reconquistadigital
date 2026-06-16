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
  diaryEntries: Record<string, string>;
  setCurrentDay: (day: number) => void;
  markDayAsCompleted: (day: number) => void;
  completeQuiz: (answers: QuizAnswers) => void;
  saveDiaryEntry: (date: string, content: string) => void;
  getDiaryEntry: (date: string) => string | undefined;
  resetProgress: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      currentDay: 1,
      completedDays: [],
      quizCompleted: false,
      quizAnswers: null,
      diaryEntries: {},

      setCurrentDay: (day) => set({ currentDay: day }),

      markDayAsCompleted: (day) => {
        const { completedDays, currentDay } = get();
        if (!completedDays.includes(day)) {
          set({
            completedDays: [...completedDays, day],
            currentDay: day === currentDay ? Math.min(day + 1, 18) : currentDay,
          });
        }
      },

      completeQuiz: (answers) => set({ quizCompleted: true, quizAnswers: answers }),

      saveDiaryEntry: (date, content) =>
        set((state) => ({
          diaryEntries: { ...state.diaryEntries, [date]: content },
        })),

      getDiaryEntry: (date) => get().diaryEntries[date],

      resetProgress: () =>
        set({
          currentDay: 1,
          completedDays: [],
          quizCompleted: false,
          quizAnswers: null,
          diaryEntries: {},
        }),
    }),
    {
      name: 'reconquista-18-dias-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
