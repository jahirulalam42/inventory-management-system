"use client";
import InventoryTable from "@/components/inventory/InventoryTable";
import OverallInventory from "@/components/inventory/OverallInventory";
import { setInventoryData } from "@/features/inventory/inventorySlice";
import { getInventoryData } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  // const [data, setData] = useState<any>();
  const dispatch = useDispatch();

  const data = useSelector((state: any) => state.inventory.data);

  useEffect(() => {
    async function fetchData() {
      const result = await getInventoryData();
      dispatch(setInventoryData(result));
    }
    fetchData();
  }, [dispatch]);

  console.log("Inventory Data", data);
  return (
    <div className="flex flex-col gap-4">
      <OverallInventory data={data?.overview} />
      <InventoryTable categories={data?.categories} products={data?.products} />
    </div>
  );
};

export default page;
