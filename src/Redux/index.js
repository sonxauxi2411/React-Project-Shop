import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsItem";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPopup: false,
};
const popupSlice = createSlice({
  name: "modalProducts",
  initialState,
  reducers: {
    SHOW_POPUP(state) {
      state.isPopup = true;
    },
    HIDE_POPUP(state) {
      state.isPopup = false;
    },
  },
});

export const popupActions = popupSlice.actions;
const store = configureStore({
  reducer: { popup: popupSlice.reducer, product: productSlice.reducer },
});

export default store;