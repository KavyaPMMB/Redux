import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add,sub,mul,div } from './Calculation'

export function DisplayCalc() {
  const calc1 = useSelector((state) => state.calc.result)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <h3>Num1= 100  Num2= 50</h3>
        <h1>{calc1}</h1>
        <button
        onClick={() => dispatch(add())}
        >
          ADD
        </button>
        
        <button
          onClick={() => dispatch(sub())}
        >
          SUBTRACT
        </button>


        <button
        onClick={() => dispatch(mul())}
        >
          MULTIPLICATION
        </button>
    

        <button
        onClick={() => dispatch(div())}
        >
          DIVISION
        </button>
        
    
      </div>
    </div>
  )
}

