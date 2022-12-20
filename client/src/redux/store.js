import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product";
import cartReducer from "./cart";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    auth: authReducer,
  },
  devTools: true,
});

export default store;
