import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          new_price: newItem.new_price,
          img: newItem.img,
          quantity: 1,
          totalPrice: newItem.new_price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.quantity) * Number(existingItem.new_price);
      }

      state.totalQuantity = state.cartItems.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
    },

    removeItem: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.quantity === 1) {
          existingItem.quantity--;
          //delete item
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
        } else if (existingItem.quantity === 0) return;
        else {
          existingItem.quantity--;
          existingItem.totalPrice =
            Number(existingItem.quantity) * Number(existingItem.new_price);
        }
      } else {
        return;
      }

      state.totalQuantity = state.cartItems.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
    },

    deleteItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalQuantity = state.cartItems.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + item.totalPrice;
      }, 0);
    },

    resetCart: (state, action) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addItem, removeItem, deleteItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
