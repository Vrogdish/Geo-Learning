
import React from "react";
import Image from "next/image";
import { useCountryStore } from "@/store/gameData";
import GameHeader from "@/components/game-header/GameHeader";
import AnswerLabel from "@/components/answer-label/AnswerLabel";
import Loader from "../loader/Loader";

export default function Game() {
  const country = useCountryStore((state) => state.country);
  const loading = useCountryStore((state) => state.loading);

  return (
    <div className="h-full w-full relative z-10">
      <GameHeader />
      <div className="flex flex-col items-center md:flex-row md:items-start  justify-around w-full h-full py-8">
        {!loading ? (
          <>
            <div className="w-60 flex flex-col items-center my-10">
              <Image src={country.flagUrl} alt="" width={250} height={250} />
            </div>
            <AnswerLabel />
          </>
        ) : (
          <Loader/>
        )}
      </div>
    </div>
  );
}
