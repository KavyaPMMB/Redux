import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { printalert } from './Alert'

export function DisplayAlert() {
  const disalert = useSelector((state) => state.alert1.alert)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <h1>{disalert}</h1>
        <button
        onClick={() => dispatch(printalert())}
        >
          ALERT
        </button>
        
        
        
    
      </div>
    </div>
  )
}

