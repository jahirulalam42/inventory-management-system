"use client";
import SuppliersTable from "@/components/suppliers/SuppliersTable";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/suppliers");
        const result = await response.json();
        setData(result);
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
