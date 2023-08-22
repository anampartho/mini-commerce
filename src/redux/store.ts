import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart-slice";
import productsReducer from "./features/products-slice";
import filterSlice from "./features/filter-slice";
import sortBySlice from "./features/sortBy-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: { cartReducer, productsReducer, filterSlice, sortBySlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useMiniSelector: TypedUseSelectorHook<RootState> = useSelector;
