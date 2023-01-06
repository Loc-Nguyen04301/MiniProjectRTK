import productReducer from "./product";
import cartReducer from "./cart";
import authReducer from "./auth";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const cartPersistConfig = {
  ...persistConfig,
  key: "cart",
};

const rootReducer = combineReducers({
  product: productReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  auth: authReducer,
});

export default rootReducer;
