import { create } from "zustand";

interface ScoreState {
  score: number;
  reset: () => void;
  increaseScore: (amout: number) => void;
}

export const UseScore = create<ScoreState>((set) => ({
  score: 0,
  reset: () => set({ score: 0 }),
  increaseScore: (amount) => set((state) => ({ score: state.score + amount })),
}));
