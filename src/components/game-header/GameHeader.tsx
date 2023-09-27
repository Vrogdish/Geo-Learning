import React from "react";
import Countdown from "../countdown/Countdown";
import Score from "../score/Score";
import { useLevelStore } from "@/store/gameData";

export default function GameHeader() {
  const turn = useLevelStore((state)=>state.turn)

  return (
    <div className="h-24 bg-gray-200 rounded-t-3xl w-full  bg-opacity-70 flex items-center justify-around px-6">
      <div>Question {turn}/20</div>
      <Countdown/>
      <Score/>
    </div>
  );
}
