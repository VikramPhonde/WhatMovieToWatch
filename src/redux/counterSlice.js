import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'mode',
  initialState: {
    value: 'light',
  },
  reducers: {

    setMode: (state,action) => {
        state.value = action.payload
    }

    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    //},
  },
})

export const { setMode} = counterSlice.actions

export default counterSlice.reducer