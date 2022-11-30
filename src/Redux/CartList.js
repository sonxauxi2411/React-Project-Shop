import { createSlice } from '@reduxjs/toolkit'
import {
  getTolocalStorage,
  saveToLocalStorage,
} from '../Component/Hook/LocalStrong'

const initialState = {
  listProducts: getTolocalStorage('CartList')
    ? getTolocalStorage('CartList')
    : [],
  total: getTolocalStorage('total') ? getTolocalStorage('total') : 0,
}
const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    addCart(state, action) {
      const productIndex = state.listProducts.findIndex(
        (item) => item.id === action.payload.id,
      )

      if (productIndex >= 0) {
        state.listProducts[productIndex].qty += 1
        state.listProducts[productIndex].total =
          state.listProducts[productIndex].price *
          state.listProducts[productIndex].qty
      } else {
        state.listProducts = [...state.listProducts, action.payload]
      }
      const listTotal = state.listProducts.map((product) =>
        Number(product.total),
      )

      state.total = listTotal.reduce((acc, cur) => acc + cur, 0)
      saveToLocalStorage('total', state.total)
      saveToLocalStorage('CartList', state.listProducts)
    },

    removeCart(state, action) {
      state.total =
        state.total - Number(state.listProducts[action.payload].total)

      saveToLocalStorage('total', state.total)
      state.listProducts.splice(action.payload, 1)
      saveToLocalStorage('CartList', state.listProducts)
    },
    incressQty(state, action) {
      const { id } = action.payload

      const newListProduct = state.listProducts.forEach((product) => {
        if (product.id === id) {
          product.qty += +1
          product.total = `${product.qty * product.price}`
          state.total = state.total + Number(product.price)
          console.log(state.total)
        }
      })
      saveToLocalStorage('total', state.total)
      saveToLocalStorage('CartList', state.listProducts)
      return newListProduct
    },
    dectementQty(state, action) {
      const { id } = action.payload
      const newListProduct = state.listProducts.forEach((product) => {
        if (product.id === id) {
          product.qty += -1
          product.total = `${product.qty * product.price}`
          state.total = state.total - Number(product.price)
        }
      })
      saveToLocalStorage('total', state.total)
      saveToLocalStorage('CartList', state.listProducts)
      return newListProduct
    },
  },
})
export const cartListAction = cartListSlice.actions
export default cartListSlice
