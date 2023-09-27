"use client";

import { useCountryStore, useLevelStore } from "@/store/gameData";
import React from "react";

export default function Header() {
  const generateCountry = useCountryStore((state) => state.generateCountry);
  const turn = useLevelStore((state) => state.turn);
  const start = useLevelStore((state) => state.start);
  const quit = useLevelStore((state) => state.reset)

  const handleclick = () => {
    generateCountry();
    start();
  };

  return (
    <header className="bg-gradient-to-tr from-blue-400 via-sky-400 to-cyan-400 max-w-screen-md m-auto rounded-b-full ">
      <nav className="flex gap-24 items-center justify-center pb-10 pt-6 px-20 font-bold text-white">
        <div>Accueil</div>
        {turn === 0 ? (
          <button
            className="border-2 px-10 py-4 rounded-full bg-sky-400 shadow-xl cursor-pointer"
            onClick={handleclick}
          >
            JOUER
          </button>
        ) : (
          <button
            className="border-2 px-10 py-4 rounded-full bg-red-400 shadow-xl cursor-pointer"
            onClick={quit}
          >
            Quitter
          </button>
        )}
        <div>A propos</div>
      </nav>
    </header>
  );
}
