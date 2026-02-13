"use client";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import SuppliersTable from "@/components/suppliers/SuppliersTable";
import { getSuppliersData } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";

const page = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSuppliersData();
        if (response?.status === 200) {
          setData(response?.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching suppliers data:", error);
      }
    };
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
    <div>
      <SuppliersTable data={data?.list} filters={data?.filterOptions?.types} />
    </div>
  );
};

export default page;
