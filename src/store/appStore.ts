import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface QuizAnswers {
  timeSinceBreakup: string;
  whoInitiated: string;
  mainGoal: string;
}

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: number;
  progress?: number; // 0-100
}

interface Achievement {
  id: string;
  type: 'streak' | 'level' | 'badge' | 'special';
  title: string;
  description: string;
  unlockedAt: number;
}

interface AppState {
  // Existing fields
  currentDay: number;
  completedDays: number[];
  quizCompleted: boolean;
  quizAnswers: QuizAnswers | null;
  diaryEntries: Record<string, string>;
  
  // Gamification - XP & Levels
  totalXP: number;
  currentLevel: number;
  xpForNextLevel: number;
  
  // Gamification - Badges & Achievements
  unlockedBadges: string[];
  achievements: Achievement[];
  
  // Streaks
  currentStreak: number;
  longestStreak: number;
  lastCompletionDate: string | null;
  
  // Stats
  totalRitualsCompleted: number;
  totalDiaryEntries: number;
  
  // Methods
  setCurrentDay: (day: number) => void;
  markDayAsCompleted: (day: number) => void;
  completeQuiz: (answers: QuizAnswers) => void;
  saveDiaryEntry: (date: string, content: string) => void;
  getDiaryEntry: (date: string) => string | undefined;
  
  // Gamification methods
  addXP: (amount: number) => void;
  unlockBadge: (badgeId: string) => void;
  addAchievement: (achievement: Achievement) => void;
  resetProgress: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Existing state
      currentDay: 1,
      completedDays: [],
      quizCompleted: false,
      quizAnswers: null,
      diaryEntries: {},
      
      // Gamification state
      totalXP: 0,
      currentLevel: 1,
      xpForNextLevel: 100,
      unlockedBadges: [],
      achievements: [],
      currentStreak: 0,
      longestStreak: 0,
      lastCompletionDate: null,
      totalRitualsCompleted: 0,
      totalDiaryEntries: 0,

      setCurrentDay: (day) => set({ currentDay: day }),

      markDayAsCompleted: (day) => {
        const { completedDays, currentDay, currentStreak, lastCompletionDate } = get();
        if (!completedDays.includes(day)) {
          // Calculate streak
          const today = new Date().toISOString().split('T')[0];
          const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
          const newStreak = lastCompletionDate === yesterday ? currentStreak + 1 : 1;
          const longestStreak = Math.max(get().longestStreak, newStreak);
          
          // Add XP and check for level up
          const newXP = get().totalXP + 10;
          const xpPerLevel = 100 * get().currentLevel;
          let newLevel = get().currentLevel;
          let xpForNext = get().xpForNextLevel;
          
          if (newXP >= xpPerLevel) {
            newLevel = get().currentLevel + 1;
            xpForNext = 100 * newLevel;
          }
          
          set({
            completedDays: [...completedDays, day],
            currentDay: day === currentDay ? Math.min(day + 1, 18) : currentDay,
            totalXP: newXP,
            currentLevel: newLevel,
            xpForNextLevel: xpForNext,
            currentStreak: newStreak,
            longestStreak,
            lastCompletionDate: today,
          });
        }
      },

      completeQuiz: (answers) => set({ quizCompleted: true, quizAnswers: answers }),

      saveDiaryEntry: (date, content) => {
        const { totalDiaryEntries } = get();
        set((state) => ({
          diaryEntries: { ...state.diaryEntries, [date]: content },
          totalDiaryEntries: totalDiaryEntries + 1,
          totalXP: state.totalXP + 5, // +5 XP for diary entry
        }));
      },

      getDiaryEntry: (date) => get().diaryEntries[date],

      addXP: (amount) => {
        const { totalXP, currentLevel } = get();
        const newXP = totalXP + amount;
        const xpPerLevel = 100 * currentLevel;
        
        if (newXP >= xpPerLevel) {
          set({
            totalXP: newXP,
            currentLevel: currentLevel + 1,
            xpForNextLevel: 100 * (currentLevel + 1),
          });
        } else {
          set({ totalXP: newXP });
        }
      },

      unlockBadge: (badgeId) => {
        const { unlockedBadges } = get();
        if (!unlockedBadges.includes(badgeId)) {
          set({
            unlockedBadges: [...unlockedBadges, badgeId],
            totalXP: get().totalXP + 20, // Bonus XP for badge
          });
        }
      },

      addAchievement: (achievement) => {
        const { achievements } = get();
        set({
          achievements: [...achievements, achievement],
          totalXP: get().totalXP + 15, // Bonus XP for achievement
        });
      },

      resetProgress: () =>
        set({
          currentDay: 1,
          completedDays: [],
          quizCompleted: false,
          quizAnswers: null,
          diaryEntries: {},
          totalXP: 0,
          currentLevel: 1,
          xpForNextLevel: 100,
          unlockedBadges: [],
          achievements: [],
          currentStreak: 0,
          longestStreak: 0,
          lastCompletionDate: null,
          totalRitualsCompleted: 0,
          totalDiaryEntries: 0,
        }),
    }),
    {
      name: 'reconquista-18-dias-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
