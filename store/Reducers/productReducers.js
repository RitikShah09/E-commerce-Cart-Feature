import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  selectedProduct: null,
  error:[],
};

export const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    allProduct: (state, action) => {
      state.products = action.payload;
    },
    productByCategories: (state, action) => {
      state.categories = action.payload;
    },
    isError: (state, action) => {
      state.error.push(action.payload);
    },
    removeError: (state, action) => {
      state.error = [];
    },
    productById: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const {allProduct, productByCategories, productByFilter, productById, isError, removeError } = productReducer.actions;

export default productReducer.reducer;
