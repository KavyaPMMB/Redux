import { createSlice } from "@reduxjs/toolkit"



const initialState={string:"Hiiiiiii  "}
export const Sample=createSlice({
    name:"print",
    initialState,
    reducers:{
       sample1 : (state) => {
      
            state.string =state.string + "Welcome"
          },

    },
})

export const {sample1} = Sample.actions

export default Sample.reducer
