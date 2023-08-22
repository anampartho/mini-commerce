import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  open: boolean;
};

const initialState: InitialState = {
  open: false,
};

export const sidebarOpen = createSlice({
  name: "sidebarOpen",
  initialState,
  reducers: {
    initiate(state, action: PayloadAction<boolean>) {
      return {
        open: action.payload,
      };
    },
  },
});

export const { initiate } = sidebarOpen.actions;
export default sidebarOpen.reducer;
