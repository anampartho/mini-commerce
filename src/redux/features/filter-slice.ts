import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  filters: string[];
};

const initialState: InitialState = {
  filters: [],
};

export const filters = createSlice({
  name: "filteres",
  initialState,
  reducers: {
    initiate(state, action: PayloadAction<string[]>) {
      return {
        filters: action.payload,
      };
    },
  },
});

export const { initiate } = filters.actions;
export default filters.reducer;
