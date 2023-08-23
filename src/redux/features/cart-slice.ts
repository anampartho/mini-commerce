import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "@/utils/types";

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
    addProductToCart(state, action: PayloadAction<Product>) {
      const productIndexInCart = state.value.products.findIndex(
        (item) => item.id == action.payload.id
      );

      if (productIndexInCart > -1) {
        state.value.products[productIndexInCart].totalQuantity +=
          action.payload.totalQuantity;
      } else {
        state.value.products.push({ ...action.payload });
      }

      state.value.totalQuantity += action.payload.totalQuantity;
    },
    removeProductFromCart(
      state,
      action: PayloadAction<string | number | undefined>
    ) {
      // check if item exits in cart
      const productIndexInCart = state.value.products.findIndex(
        (item) => item.id == action.payload
      );

      if (productIndexInCart > -1) {
        state.value.products.splice(productIndexInCart, 1);
      }

      if (state.value.totalQuantity > 0) {
        state.value.totalQuantity--;
      }
    },
    reduceProductQuantity(
      state,
      action: PayloadAction<string | number | undefined>
    ) {
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

export const {
  addProductToCart,
  removeProductFromCart,
  reduceProductQuantity,
} = cart.actions;
export default cart.reducer;
