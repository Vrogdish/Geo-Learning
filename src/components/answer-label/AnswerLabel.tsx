"use client";

import React, { useState } from "react";
import Button from "../button/Button";
import { useCountryStore, useLevelStore } from "@/store/gameData";
import { UseScore } from "@/store/scoreStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import useGameFunctions from "@/hooks/useGameFunctions";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function AnswerLabel() {
  const [choiceA, setChoiceA] = useState("");
  const [choiceB, setChoiceB] = useState("");
  const [responseSubmitted, setResponseSubmitted] = useState(false);
  const [aIsCorrect, setAIsCorrect] = useState(false);
  const [bIsCorrect, setBIsCorrect] = useState(false);

  const country = useCountryStore((state) => state.country);
  const countriesNameList = useCountryStore((state) => state.randomNames);
  const countriesCapitalList = useCountryStore((state) => state.randomCapitals);

  const increaseScore = UseScore((state) => state.increaseScore);
  const { nextLevel } = useGameFunctions();

  const handleSubmit = () => {
    if (choiceA === country.name) {
      setAIsCorrect(true);
      increaseScore(100);
    } else {
      setAIsCorrect(false);
    }
    if (choiceB === country.capital) {
      setBIsCorrect(true);
      increaseScore(250);
    } else {
      setBIsCorrect(false);
    }
    setResponseSubmitted(true);
  };

  const handleNext = () => {
    nextLevel();
    setResponseSubmitted(false);
    setAIsCorrect(false);
    setBIsCorrect(false);
  };

  return (
    <div className="w-1/2">
      <p className=" mb-6">Quelle est ce pays ?</p>
      <div className="grid grid-cols-3 gap-4 items-start ">
        {countriesNameList.map((elem, index) => (
          <div
            key={index}
            onClick={() => !responseSubmitted && setChoiceA(elem)}
            className={`cursor-pointer  text-center  px-2 py-2 border-4 rounded-xl  relative flex justify-center items-center bg-opacity-50 ${
              responseSubmitted
                ? elem === country.name
                  ? "bg-green-600"
                  : "bg-red-600"
                : "bg-gray-400"
            } ${elem === choiceA ? "border-amber-50 shadow-light" : "border-transparent"}`}
          >
            {elem}
            {responseSubmitted && elem === choiceA && !aIsCorrect ? (
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{ color: "black" }}
                className="text-6xl absolute "
              />
            ) : null}
            {responseSubmitted && elem === choiceA && aIsCorrect ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "black" }}
                className="text-6xl absolute "
              />
            ) : null}
          </div>
        ))}
        {responseSubmitted ? (
          aIsCorrect ? (
            <div className="relative">
              <p className="text-center font-bold text-yellow-500 ">
                150 points
              </p>
              <FontAwesomeIcon
                icon={faStar}
                size="2xl"
                className=" absolute bottom-0 left-24 text-yellow-500 animate-ping-both "
              />
            </div>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </div>
      <p className="  my-6">Quelle est sa capitale ?</p>
      <div className="grid grid-cols-3 gap-4 items-end">
        {countriesCapitalList.map((elem, index) => (
          <div
            key={index}
            onClick={() => !responseSubmitted && setChoiceB(elem)}
            className={`cursor-pointer  text-center  px-6 py-2 border-4 rounded-xl  relative flex justify-center items-center bg-opacity-50 ${
              responseSubmitted
                ? elem === country.capital
                  ? "bg-green-600"
                  : "bg-red-600"
                : "bg-gray-400"
            } ${elem === choiceB ? "border-amber-50 shadow-light" : "border-transparent"}`}
          >
            {elem}
            {responseSubmitted && elem === choiceB && !bIsCorrect ? (
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{ color: "black" }}
                className="text-6xl absolute "
              />
            ) : null}
            {responseSubmitted && elem === choiceB && bIsCorrect ? (
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{ color: "black" }}
                className="text-6xl absolute "
              />
            ) : null}
          </div>
        ))}
                {responseSubmitted ? (
          bIsCorrect ? (
            <div className="relative">
              <p className="text-center font-bold text-yellow-500 ">
                250 points
              </p>
              <FontAwesomeIcon
                icon={faStar}
                size="2xl"
                className=" absolute bottom-0 left-24 text-yellow-500 animate-ping-both "
              />
            </div>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </div>
      <div className="mt-20">
        {responseSubmitted ? (
          <div className="flex justify-between items-center">
            {aIsCorrect !== bIsCorrect ? (
              <p className="text-green-500 font-bold">
                Bravo tu as une bonne réponse
              </p>
            ) : null}
            {aIsCorrect && bIsCorrect ? (
              <p className="text-green-500 font-bold">
                Super tu as trouvé les 2 bonnes reponses
              </p>
            ) : null}
            {!aIsCorrect && !bIsCorrect ? (
              <p className="text-red-500 font-bold">
                Dommage tu n&apos;as pas trouvé de réponse{" "}
              </p>
            ) : null}
            <Button type="button" action={handleNext}>
              Suivant
            </Button>
          </div>
        ) : (
          <Button type="button" action={handleSubmit}>
            Soumettre
          </Button>
        )}
      </div>
    </div>
  );
}
