import { UseScore } from '@/store/scoreStore'
import React from 'react'

export default function Score () {
    const score = UseScore((state) => state.score)

  return (
    <div className='flex justify-center items-center'>
        Score : {score}
     </div>
  )
}
