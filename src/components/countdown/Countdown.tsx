"use client";

import { UseCountDown } from "@/store/countdownStore";

export default function Countdown() {
  const time = UseCountDown((state) => state.count);

  return (
    <div
      className={`text-center text-3xl border-2  w-16 h-16 rounded-full my-4 flex items-center justify-center ${
        time < 10 && "border-red-500 animate-pulse"
      }`}
    >
      {time}
    </div>
  );
}
