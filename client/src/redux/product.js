import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../service/ProductService";

export const createProduct = createAsyncThunk(
  "product/create",
  async (inputData) => {
    const res = await ProductService.create(inputData);
    return res.data;
  }
);

export const findProductsByCategory = createAsyncThunk(
  "product/findByCategory",
  async (category) => {
    const res = await ProductService.getByCategory(category);
    return res.data.products;
  }
);

export const retrieveProducts = createAsyncThunk(
  "product/retrieve",
  async () => {
    const res = await ProductService.getAll();
    return res.data.products;
  }
);

export const updateProduct = createAsyncThunk(
  "product/update",
  async ({ id, inputData }) => {
    const res = await ProductService.update(id, inputData);
    return res.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async ({ id }) => {
    await ProductService.remove(id);
    return { id };
  }
);

export const deleteAllProducts = createAsyncThunk(
  "product/deleteAll",
  async () => {
    const res = await ProductService.removeAll();
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {},
  extraReducers: {
    [createProduct.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [findProductsByCategory.fulfilled]: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
    [retrieveProducts.fulfilled]: (state, action) => {
      return [...action.payload];
    },
    [updateProduct.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (tutorial) => tutorial.id === action.payload.id
      );
      state[index] = {
        ...action.payload,
      };
    },
    [deleteProduct.fulfilled]: (state, action) => {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state.splice(index, 1);
    },
    [deleteAllProducts.fulfilled]: (state, action) => {
      return [];
    },
  },
});

export default productSlice.reducer;
