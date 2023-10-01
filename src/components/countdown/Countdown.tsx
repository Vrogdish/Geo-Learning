"use client";

import { UseCountDown } from "@/store/countdownStore";
import React, { useEffect, useState } from "react";

export default function Countdown() {
  // const [count, setCount] = useState(false);
  const time = UseCountDown((state) => state.count);
  const start = UseCountDown((state) => state.start)
//   const setTime = UseCountDown((state) => state.setTime);




  return (
    <div
      className={`text-center text-3xl border-2  w-16 h-16 rounded-full my-4 flex items-center justify-center ${time < 2 && "border-red-500 animate-pulse"}`}
      onClick={start}
    >
      {time}
    </div>
  );
}
