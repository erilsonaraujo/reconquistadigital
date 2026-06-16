'use client';

import { motion } from 'framer-motion';
import { Check, Lock } from 'lucide-react';
import Link from 'next/link';

interface DayCardProps {
  day: number;
  title: string;
  isCompleted: boolean;
  isCurrent: boolean;
  isLocked: boolean;
}

export default function DayCard({ day, title, isCompleted, isCurrent, isLocked }: DayCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: day * 0.05 }}
      whileTap={!isLocked ? { scale: 0.98 } : {}}
    >
      {isLocked ? (
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 flex items-center gap-4 opacity-50">
          <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center">
            <Lock size={20} className="text-slate-500" />
          </div>
          <div className="flex-1">
            <p className="text-slate-500 text-sm font-medium">Dia {day}</p>
            <p className="text-slate-600 text-xs">Em breve...</p>
          </div>
        </div>
      ) : (
        <Link href={`/dia/${day}`}>
          <div
            className={`rounded-2xl p-4 flex items-center gap-4 transition-all ${
              isCurrent
                ? 'bg-gradient-to-r from-amber-500/20 to-violet-600/20 border-2 border-amber-400/50'
                : isCompleted
                ? 'bg-slate-900 border border-slate-700'
                : 'bg-slate-900 border border-slate-800'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isCompleted
                  ? 'bg-gradient-to-br from-amber-400 to-amber-500'
                  : isCurrent
                  ? 'bg-gradient-to-br from-violet-600 to-violet-700'
                  : 'bg-slate-800'
              }`}
            >
              {isCompleted ? (
                <Check size={20} className="text-slate-900" strokeWidth={3} />
              ) : (
                <span
                  className={`font-bold ${
                    isCurrent ? 'text-white' : 'text-slate-400'
                  }`}
                >
                  {day}
                </span>
              )}
            </div>
            <div className="flex-1">
              <p
                className={`text-sm font-medium ${
                  isCurrent ? 'text-amber-400' : 'text-slate-300'
                }`}
              >
                Dia {day}
              </p>
              <p
                className={`text-xs ${
                  isCurrent ? 'text-slate-300' : 'text-slate-500'
                } truncate`}
              >
                {title}
              </p>
            </div>
            {!isCompleted && isCurrent && (
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            )}
          </div>
        </Link>
      )}
    </motion.div>
  );
}
