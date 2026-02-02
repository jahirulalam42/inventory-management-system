"use client";
import OrdersTable from "@/components/orders/OrdersTable";
import OverallOrders from "@/components/orders/OveralOrders";
import { getOrdersData } from "@/utils/api";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOrdersData();
        setData(response);
      } catch (error) {
        console.error("Error fetching orders data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <OverallOrders data={data?.overview} />
      <OrdersTable categories={data?.categories} orders={data?.orders} />
    </div>
  );
};

export default page;
