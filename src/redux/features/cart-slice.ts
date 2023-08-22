import Product from "@/app/(without-sidebar)/product/[id]/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
  id: number | string;
  title: string;
  price: string | number;
  category: string;
  image: string;
  totalQuantity: number;
  rating: {
    rate: number;
    count: number;
  };
};

type CartState = {
  totalQuantity: number;
  products: Product[];
};

type InitialState = {
  value: CartState;
};

const initialState: InitialState = {
  value: {
    totalQuantity: 0,
    products: [],
  },
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<Product>) {
      const productIndexInCart = state.value.products.findIndex(
        (item) => item.id == action.payload.id
      );

      if (productIndexInCart > -1) {
        state.value.products[productIndexInCart].totalQuantity++;
      } else {
        state.value.products.push({ ...action.payload });
      }

      state.value.totalQuantity++;
    },
    remove(state, action: PayloadAction<string | number>) {
      // check if item exits in cart
      const productIndexInCart = state.value.products.findIndex(
        (item) => item.id == action.payload
      );

      if (productIndexInCart > -1) {
        const currentQuantity =
          state.value.products[productIndexInCart].totalQuantity;
        if (currentQuantity <= 1) {
          state.value.products.splice(productIndexInCart, 1);
        } else {
          state.value.products[productIndexInCart].totalQuantity--;
        }
      }

      if (state.value.totalQuantity > 0) {
        state.value.totalQuantity--;
      }
    },
  },
});

export const { add, remove } = cart.actions;
export default cart.reducer;
