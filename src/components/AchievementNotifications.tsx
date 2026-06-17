"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export interface ToastNotification {
  id: string;
  type: 'achievement' | 'level-up' | 'badge' | 'streak' | 'xp';
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface AchievementToastProps {
  notification: ToastNotification;
  onClose: () => void;
}

export function AchievementToast({ notification, onClose }: AchievementToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colorGradients: Record<string, string> = {
    achievement: 'from-purple-600 to-violet-600',
    'level-up': 'from-blue-600 to-cyan-600',
    badge: 'from-amber-600 to-yellow-600',
    streak: 'from-orange-600 to-red-600',
    xp: 'from-green-600 to-emerald-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -100, x: 300 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -100, x: 300 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={`fixed top-6 right-6 bg-gradient-to-br ${
        colorGradients[notification.type]
      } rounded-2xl p-6 shadow-2xl border border-white/20 backdrop-blur-sm max-w-sm z-50`}
    >
      <div className="flex items-start gap-4">
        <div className="text-4xl">{notification.icon}</div>
        <div className="flex-1">
          <h3 className="font-bold text-white text-lg mb-1">{notification.title}</h3>
          <p className="text-white/90 text-sm">{notification.description}</p>
        </div>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Animated shine effect */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: [0, 0.3, 0], x: [200, 400] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 w-1/3 h-full bg-white/10 rounded-2xl blur-xl pointer-events-none"
      />
    </motion.div>
  );
}

interface AchievementNotificationsProps {
  notifications: ToastNotification[];
  onRemove: (id: string) => void;
}

export function AchievementNotifications({
  notifications,
  onRemove,
}: AchievementNotificationsProps) {
  return (
    <AnimatePresence>
      {notifications.map((notification) => (
        <AchievementToast
          key={notification.id}
          notification={notification}
          onClose={() => onRemove(notification.id)}
        />
      ))}
    </AnimatePresence>
  );
}
