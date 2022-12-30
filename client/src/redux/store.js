import { configureStore } from "@reduxjs/toolkit";
// import productReducer from "./product";
// import cartReducer from "./cart";
// import authReducer from "./auth";
import rootReducer from "./rootReducer";

const store = configureStore({
  // reducer: {
  //   product: productReducer,
  //   cart: cartReducer,
  //   auth: authReducer,
  // },
  reducer: rootReducer,
  devTools: true,
});

export default store;
