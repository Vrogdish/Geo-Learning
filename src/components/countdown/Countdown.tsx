"use client";

import { UseCountDown } from "@/store/countdownStore";
import React, { useEffect, useState } from "react";

export default function Countdown() {
  const [count, setCount] = useState(false);
  const time = UseCountDown((state) => state.time);
  const setTime = UseCountDown((state) => state.setTime);
  const resetTime = UseCountDown((state) => state.reset);

  const toggle = () => {
    count === false ? setCount(true) : setCount(false);
  };

  useEffect (()=>{
  if (count) {
    const interval = setInterval(() => {
      if (time === 0) {
        
        return;
      }
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  } ;
},[count, setTime, time])


  return (
    <div
      className={`text-center text-3xl border-2  w-16 h-16 rounded-full my-4 flex items-center justify-center ${time < 2 && "border-red-500 animate-pulse"}`}
      onClick={toggle}
    >
      {time}
    </div>
  );
}
