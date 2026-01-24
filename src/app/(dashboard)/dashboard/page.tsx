/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import InventorySummaryCard from "@/components/dashboard/InventorySummaryCard";
import LowQuantity from "@/components/dashboard/LowQuantity";
import OrderChart from "@/components/dashboard/OrderChart";
import ProductSummaryCard from "@/components/dashboard/ProductSummaryCard";
import PurchaseOverviewCard from "@/components/dashboard/PurchaseOverviewCard";
import SalesChart from "@/components/dashboard/SalesChart";
import SalesOverviewCard from "@/components/dashboard/SalesOverviewCard";
import TopSellingTable from "@/components/dashboard/TopSellingTable";
import { getDashboardData } from "@/utils/api";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const result = await getDashboardData();
      setData(result);
    }
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
      <div className="w-full lg:col-span-2 bordered border-2 border-blue-800 flex flex-col gap-4">
        <SalesOverviewCard data={data?.salesOverview} />
        <PurchaseOverviewCard data={data?.purchaseOverview} />
        <SalesChart data={data?.salesPurchasesChart} />
        <TopSellingTable data={data?.topSellingStock} />
      </div>

      <div className="w-full lg:col-span-1 bordered border-2 border-blue-800 flex flex-col gap-4">
        <InventorySummaryCard data={data?.inventorySummary} />
        <ProductSummaryCard data={data?.productSummary} />
        <OrderChart data={data?.orderSummary} />
        <LowQuantity data={data?.lowQuantityStock} />
      </div>
    </div>
  );
};

export default page;
