import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/features/cart-slice";
import productsReducer from "@/redux/features/products-slice";
import filterSlice from "@/redux/features/filter-slice";
import sortBySlice from "@/redux/features/sortBy-slice";
import sidebarSlice from "@/redux/features/sidebar-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    cartReducer,
    productsReducer,
    filterSlice,
    sortBySlice,
    sidebarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useMiniSelector: TypedUseSelectorHook<RootState> = useSelector;
