import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.product = action.payload;
    },
  },
});
export const productAction = productSlice.actions;
export default productSlice;
