import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  sortBy: string;
};

const initialState: InitialState = {
  sortBy: "none",
};

export const sortBy = createSlice({
  name: "sortBy",
  initialState,
  reducers: {
    initiate(state, action: PayloadAction<string>) {
      return {
        sortBy: action.payload,
      };
    },
  },
});

export const { initiate } = sortBy.actions;
export default sortBy.reducer;
