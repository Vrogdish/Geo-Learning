import useGameFunctions from "@/hooks/useGameFunctions";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Welcome() {
  const { startNewGame } = useGameFunctions();

  return (
    <div className="relative z-10 w-full  px-32">
      <h1 className="text-7xl font-bold mb-28 tracking-wider leading-loose ">
        Découvre les pays <br /> en t&apos;amusant !
      </h1>
      <div className="flex items-center gap-8 justify-end cursor-pointer" onClick={startNewGame}>
        <span className="text-3xl font-bold">Commencer</span>
        <FontAwesomeIcon icon={faAngleDoubleRight} size="4x" className="animate-next" />
      </div>
    </div>
  );
}
