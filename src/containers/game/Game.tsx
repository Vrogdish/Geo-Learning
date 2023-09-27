import React from "react";
import Image from "next/image";
import AnswerForm from "@/components/answer-form/AnswerForm";
import { useCountryStore } from "@/store/gameData";
import GameHeader from "@/components/game-header/GameHeader";

export default function Game() {
  const country = useCountryStore((state) => state.country);
  const loading = useCountryStore((state) => state.loading);

  return (
    <div className="h-full w-full">
      <GameHeader />
      <div className="flex justify-around w-full h-full py-16">
        {!loading ? (
          <>
            <div className="w-60 flex flex-col items-center mt-10">
              <Image src={country.flagUrl} alt="" width={250} height={250} />
            </div>
            <AnswerForm country={country} className="w-1/3" />
          </>
        ) : (
          <div>chargement en cours</div>
        )}
      </div>
    </div>
  );
}
