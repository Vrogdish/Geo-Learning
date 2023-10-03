"use client"

import Welcome from "../welcome/Welcome";
import Game from "../game/Game";
import { useLevelStore } from "@/store/gameData";
import Result from "../result/Result";
import Image from "next/image";
import { nbrOfTurns } from "@/config/gameConfig";

export default function MainBox() {
  const turn = useLevelStore((state) => state.turn);
  

  const boxStyle =
    "mt-28 mb-40 rounded-3xl h-[700px] flex items-center justify-center w-3/4 m-auto relative overflow-hidden shadow-light";

  if (turn <= 0) {
    return (
      <div className={boxStyle}>
        <Image
          src={"/images/globe.webp"}
          alt=""
          width={1280}
          height={900}
          className="absolute w-full h-full object-cover brightness-50 "
        />
        <Welcome />
      </div>
    );
  } else if (turn > nbrOfTurns) {
    return (
      <div className={boxStyle}>
        <Image
          src={"/images/globe.webp"}
          alt=""
          width={1280}
          height={900}
          className="absolute w-full h-full object-cover blur-md brightness-50"
        />

        <Result />
      </div>
    );
  } else {
    return (
      <div className={boxStyle}>
        <Image
          src={"/images/globe.webp"}
          alt=""
          width={1280}
          height={900}
          className="absolute w-full h-full object-cover blur-md brightness-50"
        />

        <Game />
      </div>
    );
  }
}
