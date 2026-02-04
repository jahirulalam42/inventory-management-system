import dashboardReducer from "@/features/dashboard/dashboardSlice";
import inventoryReducer from "@/features/inventory/inventorySlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    inventory: inventoryReducer,
  },
});
