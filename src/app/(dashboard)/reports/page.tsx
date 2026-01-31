"use client";
import BestSellingCategory from "@/components/reports/BestSellingCategory";
import OverviewCard from "@/components/reports/OverviewCard";
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
    <div className="">
      <div className="w-full flex flex-row gap-4">
        <OverviewCard data={data?.overview} />
        <BestSellingCategory />
      </div>
    </div>
  );
};

export default page;
