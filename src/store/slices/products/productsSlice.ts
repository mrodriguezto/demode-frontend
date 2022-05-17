import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../types/dataTypes";

export interface ProductsState {
  value: Product[];
}

const initialState: ProductsState = {
  value: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    initializeProducts: (state, action: PayloadAction<Product[]>) => {
      state.value = action.payload.slice();
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.value.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.value.findIndex(
        (product) => product._id === action.payload._id
      );
      state.value[index] = action.payload;
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

export const { initializeProducts, addProduct, updateProduct, deleteProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
