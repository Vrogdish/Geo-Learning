import { useCountryStore, useLevelStore } from "@/store/gameData";
import { UseScore } from "@/store/scoreStore";

export default function useGameFunctions() {
  const generateCountry = useCountryStore((state) => state.generateCountry);
  const resetScore = UseScore((state) => state.reset);
  const startLevel = useLevelStore((state) => state.start);
  const finish = useLevelStore((state)=>state.quit)
  const reset = useLevelStore((state)=>state.reset)
  const next = useLevelStore((state)=>state.nextLevel)

  const startNewGame =  () => {
    generateCountry();
    resetScore();
    startLevel();
  };

  const endGame = () => {
    finish()
  };

  const resetGame = ()=> {
    reset()
  }

  const nextLevel = () => {
    generateCountry()
    next()
  };

  return {
    startNewGame,
    endGame,
    resetGame,
    nextLevel,
  };
}
