"use client";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import InventoryTable from "@/components/inventory/InventoryTable";
import OverallInventory from "@/components/inventory/OverallInventory";
import { setInventoryData } from "@/features/inventory/inventorySlice";
import { getInventoryData } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const data = useSelector((state: any) => state.inventory.data);

  useEffect(() => {
    async function fetchData() {
      const result = await getInventoryData();
      if (result?.status === 200) {
        dispatch(setInventoryData(result?.data));
        setLoading(false);
      }
    }
    fetchData();
  }, [dispatch]);

  // console.log("Inventory Data", data);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col gap-4">
      <OverallInventory />
      <InventoryTable />
    </div>
  );
};

export default page;
