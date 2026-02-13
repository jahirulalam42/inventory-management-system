"use client";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ManageStore from "@/components/manageStore/ManageStore";
import { getManageStoreData } from "@/utils/api";
import React, { useEffect } from "react";

const page = () => {
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getManageStoreData();
      if (result?.status === 200) {
        setData(result?.data);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // console.log("Manage Store Data", data);
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <ManageStore data={data?.stores} />
    </div>
  );
};

export default page;
