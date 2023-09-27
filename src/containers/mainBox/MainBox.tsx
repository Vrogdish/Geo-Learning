"use client";

import Welcome from "../welcome/Welcome";
import Game from "../game/Game";
import { useLevelStore } from "@/store/gameData";
import Result from "../result/Result";

export default function MainBox() {
  const turn = useLevelStore((state) => state.turn);

  const boxStyle = "bg-gradient-to-tr from-blue-400 via-sky-400 to-cyan-400 my-20 rounded-3xl shadow-2xl h-[600px] flex items-center justify-center w-3/4 m-auto"

  if (turn <= 0) {
    return (
      <div className={boxStyle}>
        <Welcome />
      </div>
    );
  } else if (turn > 20) {
    return (
      <div className={boxStyle}>
        <Result/>
      </div>
    );
  } else {
    return (
      <div className={boxStyle}>
         <Game />
      </div>
    );
  }


}
