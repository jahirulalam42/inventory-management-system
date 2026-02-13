/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import InventorySummaryCard from "@/components/dashboard/InventorySummaryCard";
import LowQuantity from "@/components/dashboard/LowQuantity";
import OrderChart from "@/components/dashboard/OrderChart";
import ProductSummaryCard from "@/components/dashboard/ProductSummaryCard";
import PurchaseOverviewCard from "@/components/dashboard/PurchaseOverviewCard";
import SalesChart from "@/components/dashboard/SalesChart";
import SalesOverviewCard from "@/components/dashboard/SalesOverviewCard";
import TopSellingTable from "@/components/dashboard/TopSellingTable";
import { setData } from "@/features/dashboard/dashboardSlice";
import { getDashboardData } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getDashboardData();
      console.log("Dashboard Result", result);
      if (result?.status === 200) {
        dispatch(setData(result?.data));
        setLoading(false);
      }
    }
    fetchData();
  }, [dispatch]);

  // console.log(data);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-2 xl:gap-6">
      <div className="w-full lg:col-span-2 flex flex-col gap-4">
        <SalesOverviewCard />
        <PurchaseOverviewCard />
        <SalesChart />
        <TopSellingTable />
      </div>

      <div className="w-full lg:col-span-1 flex flex-col gap-4">
        <InventorySummaryCard />
        <ProductSummaryCard />
        <OrderChart />
        <LowQuantity />
      </div>
    </div>
  );
};

export default page;
