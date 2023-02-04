import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {sample1  } from './Sample'

export function Home() {
  const a = useSelector((state) => state.show.string)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch(sample1())}
        >
          Print
        </button>
        <h1>{a}</h1>
      </div>
    </div>
  )
}

