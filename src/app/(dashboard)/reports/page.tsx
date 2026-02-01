"use client";
import BestSellingCategory from "@/components/reports/BestSellingCategory";
import BestSellingProduct from "@/components/reports/BestSellingProduct";
import OverviewCard from "@/components/reports/OverviewCard";
import ProfitAndRevenue from "@/components/reports/ProfitAndRevenue";
import { getReportsData } from "@/utils/api";
import React, { useEffect } from "react";

const page = () => {
  const [data, setData] = React.useState<any>();

  useEffect(() => {
    async function fetchData() {
      const result = await getReportsData();
      setData(result);
    }
    fetchData();
  }, []);
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col lg:flex-row gap-4">
        <OverviewCard data={data?.overview} />
        <BestSellingCategory data={data?.bestSellingCategories} />
      </div>
      <ProfitAndRevenue data={data?.profitRevenueChart} />
      <BestSellingProduct data={data?.bestSellingProducts} />
    </div>
  );
};

export default page;
