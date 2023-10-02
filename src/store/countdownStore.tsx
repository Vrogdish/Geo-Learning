import { time } from "@/config/gameConfig";
import { create } from "zustand";

interface CountDownState {
  count: number;
  timerIsOn: boolean;
  intervalId: any;
  start: () => void;
  stop: () => void;
  reset: () => void;
  setTime: (newTime: number) => void;
}

export const UseCountDown = create<CountDownState>((set, get) => ({
  count: time,
  timerIsOn: false,
  intervalId: null,
  start: () => {
    let count = get().count;
    set({ timerIsOn: true });
    const intervalId = setInterval(() => {
      if (count > 0 && get().timerIsOn) {
        count -= 1;
        set({ count: count });
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
    set({ intervalId: intervalId });
  },
  stop: () => {
    set({ timerIsOn: false });
    clearInterval(get().intervalId);
  },
  reset: () => {
    set({ count: time, timerIsOn: false });
    clearInterval(get().intervalId);
  },
  setTime: (value: number) => set({ count: value }),
}));
