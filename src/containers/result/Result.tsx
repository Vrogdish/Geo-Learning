import { UseScore } from '@/store/scoreStore'
import React from 'react'

export default function Result() {
const score = UseScore((state)=>state.score)

  return (
    <div className='relative z-10 '>Ton score est de {score}</div>
  )
}
