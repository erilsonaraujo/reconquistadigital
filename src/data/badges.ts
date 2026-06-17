export interface BadgeType {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  category: 'streak' | 'level' | 'activity' | 'emotional';
  requirement: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export const BADGES: Record<string, BadgeType> = {
  // Streak Badges
  'first-step': {
    id: 'first-step',
    name: 'Primeiro Passo',
    description: 'Complete seu primeiro dia',
    icon: '👣',
    color: 'from-blue-400 to-blue-600',
    category: 'streak',
    requirement: 1,
    rarity: 'common',
  },
  'week-warrior': {
    id: 'week-warrior',
    name: 'Guerreiro da Semana',
    description: 'Complete 7 dias consecutivos',
    icon: '⚔️',
    color: 'from-orange-400 to-red-600',
    category: 'streak',
    requirement: 7,
    rarity: 'rare',
  },
  'unstoppable': {
    id: 'unstoppable',
    name: 'Imparável',
    description: 'Complete 14 dias consecutivos',
    icon: '🔥',
    color: 'from-red-400 to-pink-600',
    category: 'streak',
    requirement: 14,
    rarity: 'epic',
  },
  'legend-of-18': {
    id: 'legend-of-18',
    name: 'Lenda dos 18 Dias',
    description: 'Complete todos os 18 dias consecutivos',
    icon: '👑',
    color: 'from-amber-300 to-amber-500',
    category: 'streak',
    requirement: 18,
    rarity: 'legendary',
  },

  // Level Badges
  'novice': {
    id: 'novice',
    name: 'Aprendiz',
    description: 'Atinja o nível 5',
    icon: '📚',
    color: 'from-green-400 to-green-600',
    category: 'level',
    requirement: 5,
    rarity: 'common',
  },
  'initiate': {
    id: 'initiate',
    name: 'Iniciado',
    description: 'Atinja o nível 10',
    icon: '🌙',
    color: 'from-purple-400 to-purple-600',
    category: 'level',
    requirement: 10,
    rarity: 'rare',
  },
  'master': {
    id: 'master',
    name: 'Mestre da Transformação',
    description: 'Atinja o nível 25',
    icon: '✨',
    color: 'from-cyan-400 to-blue-600',
    category: 'level',
    requirement: 25,
    rarity: 'epic',
  },
  'ascended': {
    id: 'ascended',
    name: 'Ascendido',
    description: 'Atinja o nível 50',
    icon: '🚀',
    color: 'from-fuchsia-400 to-purple-600',
    category: 'level',
    requirement: 50,
    rarity: 'legendary',
  },

  // Activity Badges
  'diary-keeper': {
    id: 'diary-keeper',
    name: 'Guardião do Diário',
    description: 'Escreva 7 entradas no diário',
    icon: '📖',
    color: 'from-pink-400 to-rose-600',
    category: 'activity',
    requirement: 7,
    rarity: 'common',
  },
  'ritual-master': {
    id: 'ritual-master',
    name: 'Mestre do Ritual',
    description: 'Complete 10 rituais práticos',
    icon: '🕯️',
    color: 'from-indigo-400 to-purple-600',
    category: 'activity',
    requirement: 10,
    rarity: 'rare',
  },
  'midnight-worker': {
    id: 'midnight-worker',
    name: 'Trabalhador da Madrugada',
    description: 'Complete um dia após as 22:00',
    icon: '🌙',
    color: 'from-slate-400 to-slate-600',
    category: 'activity',
    requirement: 1,
    rarity: 'rare',
  },

  // Emotional Journey Badges
  'awakened': {
    id: 'awakened',
    name: 'Despertado',
    description: 'Escolha "Autoconhecimento" como objetivo',
    icon: '🧘',
    color: 'from-teal-400 to-cyan-600',
    category: 'emotional',
    requirement: 1,
    rarity: 'rare',
  },
  'healer': {
    id: 'healer',
    name: 'Curador',
    description: 'Escolha "Superar e Seguir" como objetivo',
    icon: '💚',
    color: 'from-green-400 to-emerald-600',
    category: 'emotional',
    requirement: 1,
    rarity: 'rare',
  },
  'seeker': {
    id: 'seeker',
    name: 'Buscador',
    description: 'Escolha "Reconquistar" como objetivo',
    icon: '🔍',
    color: 'from-amber-400 to-yellow-600',
    category: 'emotional',
    requirement: 1,
    rarity: 'rare',
  },
  'truth-finder': {
    id: 'truth-finder',
    name: 'Descobridor da Verdade',
    description: 'Escolha "Entender o que aconteceu" como objetivo',
    icon: '🔮',
    color: 'from-violet-400 to-purple-600',
    category: 'emotional',
    requirement: 1,
    rarity: 'rare',
  },
};

export const getBadgesByCategory = (category: string): BadgeType[] => {
  return Object.values(BADGES).filter((badge) => badge.category === category);
};

export const getBadgesByRarity = (rarity: string): BadgeType[] => {
  return Object.values(BADGES).filter((badge) => badge.rarity === rarity);
};
