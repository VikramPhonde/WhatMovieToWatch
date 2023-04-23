import { configureStore } from '@reduxjs/toolkit'
import modeReducer from './counterSlice'

export default configureStore({
  reducer: {
    mode: modeReducer,
  },
})