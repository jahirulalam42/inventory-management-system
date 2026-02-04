import { createSlice } from "@reduxjs/toolkit";

export const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    data: {},
    overview: {},
    products: [],
  },
  reducers: {
    setInventoryData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInventoryData } = inventorySlice.actions;

export default inventorySlice.reducer;
