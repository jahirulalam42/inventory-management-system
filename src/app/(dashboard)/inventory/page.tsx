"use client";
import InventoryTable from "@/components/inventory/InventoryTable";
import OverallInventory from "@/components/inventory/OverallInventory";
import { getInventoryData } from "@/utils/api";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const result = await getInventoryData();
      setData(result);
    }
    fetchData();
  }, []);

  // console.log("Inventory Data", data);
  return (
    <div className="flex flex-col gap-4">
      <OverallInventory data={data?.overview} />
      <InventoryTable categories={data?.categories} products={data?.products} />
    </div>
  );
};

export default page;
