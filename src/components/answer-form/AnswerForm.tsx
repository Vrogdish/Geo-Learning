import { Country } from "@/models/country";
import React, { useState } from "react";
import Button from "../button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useCountryStore, useLevelStore } from "@/store/gameData";

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
  const nextLevel = useLevelStore((state)=>state.nextLevel)

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    data.responseA.toLowerCase() === country.name.toLowerCase()
      ? setaIsCorrect(true)
      : setaIsCorrect(false);
    data.responseB.toLowerCase() === country.capital.toLowerCase()
      ? setbIsCorrect(true)
      : setbIsCorrect(false);

    setresponseIsSend(true);
  };

  const handleNext = () => {
    genenrateCountry();
    nextLevel()
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
        <input type="text" id="responseA" {...register("responseA")} />
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
        <input type="text" id="responseB" {...register("responseB")} />
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
        <Button
          type="submit"
          action={() => {
            null;
          }}
          theme="confirm"
          className="m-auto"
        >
          Valider
        </Button>
      ) : (
        <div className="flex items-center relative">
          <Button type="button" theme="disabled" className="m-auto">
            Valider
          </Button>
          <div className="w-16 h-16 border-2 rounded-full absolute right-2" onClick={handleNext}></div>
        </div>
      )}
    </form>
  );
}
