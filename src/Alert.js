import { createSlice } from "@reduxjs/toolkit"


const initialState={alert:"Hlooo"}
export const Alert=createSlice({
    name:"displayalert",
    initialState,
    reducers:{
        printalert: (state) => {
      
            alert(state.alert +"  "+ "Nice to meet you")
          },
          
    },
})

export const { printalert } = Alert.actions

export default Alert.reducer
