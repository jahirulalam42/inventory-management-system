import React from "react";
import { DataTable } from "../table/data-table";
import { topSellingColumns } from "@/components/table/columns";
import { Button } from "../ui/button";

const TopSellingTable = ({ data }: any) => {
  // console.log("Table Data", data);
  return (
    <div className="w-full h-77 bg-white rounded-sm py-6 lg:p-6">
      <div className="w-full flex flex-row justify-between">
        <h1 className="flex-auto text-xl">Top Selling Stock</h1>
        <Button variant="link" className="text-blue-500">
          See All
        </Button>
      </div>

      <div className="w-full py-4">
        {data && (
          <DataTable columns={topSellingColumns} data={data?.slice(0, 5)} />
        )}
      </div>
    </div>
  );
};

export default TopSellingTable;
