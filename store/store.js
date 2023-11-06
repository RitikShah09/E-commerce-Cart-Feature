import { configureStore } from "@reduxjs/toolkit";
import cart from "./Reducers/cartReducers";
import product from "./Reducers/productReducers";
import user from "./Reducers/authReducers";

export const store = configureStore({
  reducer: {
    user,
    product,
    cart
  },
});
