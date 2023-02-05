import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../service/ProductService";

export const retrieveProducts = createAsyncThunk(
  "product/retrieve",
  async () => {
    const res = await ProductService.getAll();
    return res.data.products;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(retrieveProducts.fulfilled, (state, action) => {
      return [...action.payload];
    });
  },
});

export default productSlice.reducer;
