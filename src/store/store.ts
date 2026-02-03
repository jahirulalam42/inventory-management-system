import dashboardReducer from "@/features/dashboard/dashboardSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});
