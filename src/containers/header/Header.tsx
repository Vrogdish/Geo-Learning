"use client";

import { useLevelStore } from "@/store/gameData";
import React from "react";
import "./style.css";
import useGameFunctions from "@/hooks/useGameFunctions";

export default function Header() {
  const turn = useLevelStore((state) => state.turn);
  const { startNewGame, endGame, resetGame } = useGameFunctions();

  return (
    <header className="">
      {/* <div className="w-full h-10 header-top shadow-light bg-amber-950"></div> */}
      <nav className="flex gap-24 items-center justify-center py-6   px-20 font-bold  max-w-screen-md m-auto rounded-b-full shadow-light  ">
        <div onClick={resetGame} className="cursor-pointer border-2 border-transparent hover:border-b-amber-800 transition-all ">
          Accueil
        </div>
        {turn === 0 || turn > 20 ? (
          <button
            className="border-2 px-10 py-4 rounded-full  shadow-light cursor-pointer hover:bg-amber-950 transition-all  "
            onClick={startNewGame}
          >
            JOUER
          </button>
        ) : (
          <button
            className="border-2 px-10 py-4 rounded-full shadow-xl cursor-pointer hover:bg-amber-950 transition-all"
            onClick={endGame}
          >
            Quitter
          </button>
        )}
        <div className="cursor-pointer border-2 border-transparent hover:border-b-amber-800 transition-all">A propos</div>
      </nav>
      {/* <div className="w-full h-10 absolute bg-amber-950 top-0"></div> */}
    </header>
  );
}
