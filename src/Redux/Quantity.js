import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 1,
}
const quantitySlice = createSlice({
  name: 'quantityCounter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    dectement(state) {
      state.counter--
    },
  },
})
export const quantiyAction = quantitySlice.actions
export default quantitySlice
