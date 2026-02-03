import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    data: {},
    salesOverview: {},
    purchaseOverview: {},
    salesPurchasesChart: {},
    topSellingStock: [],
    inventorySummary: {},
    productSummary: {},
    orderSummary: [],
    lowQuantityStock: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.salesOverview = action.payload.salesOverview;
      state.purchaseOverview = action.payload.purchaseOverview;
      state.salesPurchasesChart = action.payload.salesPurchasesChart;
      state.topSellingStock = action.payload.topSellingStock;
      state.inventorySummary = action.payload.inventorySummary;
      state.productSummary = action.payload.productSummary;
      state.orderSummary = action.payload.orderSummary;
      state.lowQuantityStock = action.payload.lowQuantityStock;
    },
  },
});

export const { setData } = dashboardSlice.actions;

export default dashboardSlice.reducer;
