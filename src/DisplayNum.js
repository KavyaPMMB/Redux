import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { printnums } from './PrintNumSlice'

export function DisplayNum() {
  const display = useSelector((state) => state.print.num)
  const dispatch = useDispatch()

  return (
    <div>
      <div> 
        <button
          aria-label="Increment value"
          onClick={() => dispatch(printnums())}
        >
          Print
        </button>
        <h1>{display}</h1>
      </div>
    </div>
  )
}

