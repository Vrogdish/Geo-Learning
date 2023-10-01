import { Country } from "@/models/country";
import React, { useState } from "react";
import Button from "../button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCountryStore, useLevelStore } from "@/store/gameData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { UseScore } from "@/store/scoreStore";

interface Inputs {
  responseA: string;
  responseB: string;
}

interface Props {
  country: Country;
  className?: string;
}

export default function AnswerForm({ className }: Props) {
  const [aIscorrect, setaIsCorrect] = useState(false);
  const [bIscorrect, setbIsCorrect] = useState(false);
  const [responseIsSend, setresponseIsSend] = useState(false);

  const country = useCountryStore((state) => state.country);
  const genenrateCountry = useCountryStore((state) => state.generateCountry);
  const nextLevel = useLevelStore((state) => state.nextLevel);
  const increaseScore = UseScore((state) => state.increaseScore);

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.responseA.toLowerCase() === country.name.toLowerCase()) {
      setaIsCorrect(true);
      increaseScore(100);
    } else {
      setaIsCorrect(false);
    }

    if (data.responseB.toLowerCase() === country.capital.toLowerCase()) {
      setbIsCorrect(true);
      increaseScore(250)
    } else {
      setbIsCorrect(false);
    }

    setresponseIsSend(true);
  };

  const handleNext = () => {
    genenrateCountry();
    nextLevel();
    setresponseIsSend(false);
    setaIsCorrect(false);
    setbIsCorrect(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${className} space-y-6`}
    >
      <div className="flex flex-col gap-4">
        <label htmlFor="responseA">De quel pays s&apos;agit-il ?</label>
        <input
          type="text"
          id="responseA"
          autoComplete="off"
          {...register("responseA")}
        />
        <div className="h-10">
          {responseIsSend ? (
            <>
              {!aIscorrect ? (
                <p className="text-red-700 font-bold">
                  La réponse était : {country.name}
                </p>
              ) : (
                <p className="text-green-700 font-bold">Bravo ! tu as trouvé</p>
              )}
            </>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <label htmlFor="responseB">Quelle est sa capitale ?</label>
        <input
          type="text"
          id="responseB"
          autoComplete="off"
          {...register("responseB")}
        />
        <div className="h-10">
          {responseIsSend ? (
            <>
              {!bIscorrect ? (
                <p className="text-red-700 font-bold">
                  La réponse était : {country.capital}
                </p>
              ) : (
                <p className="text-green-700 font-bold">Bravo ! tu as trouvé</p>
              )}
            </>
          ) : null}
        </div>
      </div>
      {responseIsSend === false ? (
        <div className="flex items-center justify-between">
          <Button type="submit" theme="confirm">
            Valider
          </Button>
          <div className="w-16 h-16 border-2 rounded-full  right-2 flex justify-center items-center bg-gray-300 text-gray-400">
            <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <Button type="button" theme="disabled">
            Valider
          </Button>
          <div
            className="w-16 h-16 border-2 rounded-full  right-2 flex justify-center items-center bg-green-500"
            onClick={handleNext}
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />
          </div>
        </div>
      )}
    </form>
  );
}
