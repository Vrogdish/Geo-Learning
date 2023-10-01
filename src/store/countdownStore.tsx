import { create } from "zustand";


interface CountDownState {
  count: number;
  timerIsOn: boolean;
  start: () => void;
  stop: () => void;
  reset: () => void;
  setTime: (newTime: number) => void;
}

export const UseCountDown = create<CountDownState>((set) => ({
  count: 10,
  timerIsOn: false,
  start: () => {
    let count = 10 
    const intervalId = setInterval(() => {
        count -= 1;
        set({ count });
        if (count === 0) {
          clearInterval(intervalId);
        }
      }, 1000);
},
  stop: () => set({timerIsOn : false}),
  reset: () => set({ count: 10 }),
  setTime: (value: number) => set({ count: value }),
}));
