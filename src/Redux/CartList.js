import { createSlice } from '@reduxjs/toolkit'
import {
  getTolocalStorage,
  saveToLocalStorage,
} from '../Component/Hook/LocalStrong'

const initialState = {
  listProducts: [],
}
const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    addCart(state, action) {
      state.listProducts = [...state.listProducts, action.payload]
      saveToLocalStorage('CartList', state.listProducts)
    },
    removeCart(state, action) {
      const listProductsNew = [...state.listProducts]
      listProductsNew.splice(action.payload, 1)
      saveToLocalStorage('CartList', listProductsNew)
    },
  },
})
export const cartListAction = cartListSlice.actions
export default cartListSlice
