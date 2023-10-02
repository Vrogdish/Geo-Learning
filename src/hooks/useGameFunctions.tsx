import { UseCountDown } from "@/store/countdownStore";
import { useCountryStore, useLevelStore } from "@/store/gameData";
import { UseScore } from "@/store/scoreStore";

export default function useGameFunctions() {
  const generateCountry = useCountryStore((state) => state.generateCountry);
  const loading = useCountryStore((state)=>state.loading)
  const resetScore = UseScore((state) => state.reset);
  const startLevel = useLevelStore((state) => state.start);
  const finish = useLevelStore((state)=>state.quit)
  const reset = useLevelStore((state)=>state.reset)
  const next = useLevelStore((state)=>state.nextLevel)
  const countdownStart = UseCountDown((state)=>state.start)
  const countdownReset = UseCountDown((state)=>state.reset)


  const startNewGame = async () => {
    countdownReset()
    await generateCountry();
    resetScore();
    startLevel();
    countdownStart()
  };

  const endGame = () => {
    finish()
    countdownReset()
  };

  const resetGame = ()=> {
    reset()
    countdownReset()
  }

  const nextLevel = async () => {
    countdownReset()
    await generateCountry()
    next()
    countdownStart()
  };

  return {
    startNewGame,
    endGame,
    resetGame,
    nextLevel,
  };
}
