import React from "react";
import { Button } from "../ui/button";
import { DataTable } from "../table/data-table";
import { bestSellingProductColumns } from "../table/columns";

const BestSellingProduct = ({ data }: any) => {
  console.log("Best Selling Product", data);
  return (
    <div className="h-fit rounded-sm flex flex-col gap-2 bg-white p-4">
      <div className="w-full flex flex-row justify-between">
        <h1 className="text-base lg:text-xl">Best selling product</h1>
        <Button variant="link" className="text-blue-500">
          See All
        </Button>
      </div>

      <div className="w-full">
        {data && (
          <DataTable
            columns={bestSellingProductColumns}
            data={data?.slice(0, 4)}
          />
        )}
      </div>
    </div>
  );
};

export default BestSellingProduct;
