"use client";
import ManageStore from "@/components/manageStore/ManageStore";
import { getManageStoreData } from "@/utils/api";
import React, { useEffect } from "react";

const page = () => {
  const [data, setData] = React.useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getManageStoreData();
      setData(result);
    };
    fetchData();
  }, []);

  console.log("Manage Store Data", data);
  return (
    <div>
      <ManageStore data={data?.stores} />
    </div>
  );
};

export default page;
