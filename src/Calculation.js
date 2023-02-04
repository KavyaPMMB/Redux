import { createSlice } from "@reduxjs/toolkit"


const initialState={num1:100,num2:50,result:0}
export const Calculation=createSlice({
    name:"print",
    initialState,
    reducers:{
        add: (state) => {
      
            state.result=state.num1+state.num2
          },
          sub: (state) => {
      
            state.result=state.num1-state.num2
          },
          mul: (state) => {
      
            state.result=state.num1*state.num2
          },
          div: (state) => {
      
            state.result=state.num1/state.num2
          },

    },
})

export const { add,sub,mul,div } = Calculation.actions

export default Calculation.reducer
