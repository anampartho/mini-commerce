import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/utils/types";

type InitialState = {
  products: Product[];
};

const initialState: InitialState = {
  products: [],
};

export const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      return {
        products: action.payload,
      };
    },
  },
});

export const { setProducts } = products.actions;
export default products.reducer;
