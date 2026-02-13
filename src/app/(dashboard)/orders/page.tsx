"use client";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import OrdersTable from "@/components/orders/OrdersTable";
import OverallOrders from "@/components/orders/OveralOrders";
import { getOrdersData } from "@/utils/api";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOrdersData();
        if (response?.status === 200) {
          setData(response?.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching orders data:", error);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col gap-2">
      <OverallOrders data={data?.overview} />
      <OrdersTable categories={data?.categories} orders={data?.orders} />
    </div>
  );
};

export default page;
