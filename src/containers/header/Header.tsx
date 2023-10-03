"use client";

import { useLevelStore } from "@/store/gameData";
import React from "react";
import useGameFunctions from "@/hooks/useGameFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faQuestion } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const turn = useLevelStore((state) => state.turn);
  const { startNewGame, endGame, resetGame } = useGameFunctions();

  return (
    <header className="">
      <nav className="flex gap-6 md:gap-24 items-center justify-center py-6   px-20 font-bold w-full md:max-w-screen-md m-auto rounded-b-full shadow-light  ">
        <div onClick={resetGame} className="cursor-pointer border-2 border-transparent hover:border-b-amber-800 transition-all hidden md:block">
          Accueil
        </div>
        <FontAwesomeIcon icon={faHouse} className="md:hidden" onClick={resetGame} />
        {turn === 0 || turn > 20 ? (
          <button
            className="border-2 px-10 py-4 rounded-full  shadow-light cursor-pointer hover:bg-amber-950 transition-all  "
            onClick={startNewGame}
          >
            JOUER
          </button>
        ) : (
          <button
            className="border-2 px-10 py-4 rounded-full shadow-xl cursor-pointer hover:bg-amber-950 transition-all "
            onClick={endGame}
          >
            Quitter
          </button>
        )}
        <div className="cursor-pointer border-2 border-transparent hover:border-b-amber-800 transition-all hidden md:block">A propos</div>
        <FontAwesomeIcon icon={faQuestion} className="md:hidden" />
      </nav>
    </header>
  );
}
