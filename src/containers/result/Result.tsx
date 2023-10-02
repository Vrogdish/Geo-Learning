import Button from '@/components/button/Button'
import { nbrOfTurns, scoreForA, scoreForB } from '@/config/gameConfig'
import useGameFunctions from '@/hooks/useGameFunctions'
import { UseScore } from '@/store/scoreStore'
import React from 'react'

export default function Result() {
const score = UseScore((state)=>state.score)

const {startNewGame, resetGame} = useGameFunctions()

const lowScore = (scoreForA + scoreForB) * nbrOfTurns * 1/3
const middleScore = (scoreForA + scoreForB) * nbrOfTurns * 2/3

const congratStyleDefault = "text-center mb-10"

  return (
    <div className='relative z-10 '>
      {score < lowScore && <p className={`${congratStyleDefault} `}>Tu peux surement mieux faire .... </p>}
      {score >= lowScore && score <= middleScore && <p className={`${congratStyleDefault}`}>Bravo pour ce resultat</p>}
      {score > middleScore && <p className={`${congratStyleDefault}`}>Félicitation, super score ! </p>}

      <p className='text-5xl text-center mb-28'>{score} points</p>
      <div className='flex gap-20'>
      <Button theme='alert' action={resetGame}>
        Quitter
      </Button>
      <Button action={startNewGame}>
        Rejouer
      </Button>
      </div>

      </div>
  )
}
