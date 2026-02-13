"use client";
import SuppliersTable from "@/components/suppliers/SuppliersTable";
import { getSuppliersData } from "@/utils/api";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSuppliersData();
        setData(response);
      } catch (error) {
        console.error("Error fetching suppliers data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <SuppliersTable data={data?.list} filters={data?.filterOptions?.types} />
    </div>
  );
};

export default page;
