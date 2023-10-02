import React from "react";
import Countdown from "../countdown/Countdown";
import Score from "../score/Score";
import { useLevelStore } from "@/store/gameData";
import { nbrOfTurns } from "@/config/gameConfig";

export default function GameHeader() {
  const turn = useLevelStore((state)=>state.turn)

  return (
    <div className="h-24 bg-black rounded-t-3xl w-full  bg-opacity-30 flex items-center justify-around px-6 ">
      <div>Question {turn}/{nbrOfTurns}</div>
      <Countdown/>
      <Score/>
    </div>
  );
}
