import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    data: {},
    overview: {},
    products: [],
    selectValue: "all",
  },
  reducers: {
    setInventoryData: (state, action) => {
      state.data = action.payload;
      state.overview = action.payload.overview;
      state.products = action.payload.products;
    },
    setSelectValue: (state, action) => {
      state.selectValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInventoryData, setSelectValue } = inventorySlice.actions;

export default inventorySlice.reducer;
