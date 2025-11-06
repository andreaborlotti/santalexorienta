
import { Score } from './types';
import { boosts } from './constants';

export const parseCambridge = (str: string | undefined): string[] => {
    if (!str) return [];
    return str.replace(/ e /g, ', ').split(',').map(s => s.trim().charAt(0).toUpperCase() + s.trim().slice(1)).filter(Boolean);
};

export function applyBoost(score: Score, answerId: string): Score {
  const inc = boosts[answerId] || {};
  const newScore = { ...score };
  Object.keys(inc).forEach((key) => {
    newScore[key] = (newScore[key] || 0) + (inc[key] || 0);
  });
  return newScore;
}

export function shuffleArray<T,>(array: T[]): T[] {
  if (!Array.isArray(array)) {
    return [];
  }
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
