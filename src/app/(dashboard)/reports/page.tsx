"use client";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import BestSellingCategory from "@/components/reports/BestSellingCategory";
import BestSellingProduct from "@/components/reports/BestSellingProduct";
import OverviewCard from "@/components/reports/OverviewCard";
import ProfitAndRevenue from "@/components/reports/ProfitAndRevenue";
import { getReportsData } from "@/utils/api";
import React, { useEffect } from "react";

const page = () => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<any>();

  useEffect(() => {
    async function fetchData() {
      const result = await getReportsData();
      if (result?.status === 200) {
        setData(result?.data);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
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
