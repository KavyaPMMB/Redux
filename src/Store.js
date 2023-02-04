import { configureStore } from '@reduxjs/toolkit'
import PrintNumSlice from './PrintNumSlice'
import  counterSlice  from './Slice'
import Sample from './Sample'
import Calculation from './Calculation'
import Alert from './Alert'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    print:PrintNumSlice,
    show:Sample,
    calc:Calculation,
    alert1:Alert
    
  },
  
})