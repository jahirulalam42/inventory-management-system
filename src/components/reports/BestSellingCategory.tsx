import React from "react";
import { DataTable } from "../table/data-table";
import { bestSellingCategoryColumns } from "../table/columns";
import { Button } from "../ui/button";

const BestSellingCategory = ({ data }: any) => {
  return (
    <div className="flex-1 h-61 w-full lg:w-[50%] bg-white rounded-sm p-2 lg:p-4 flex flex-col lg:gap-2">
      <div className="w-full flex flex-row justify-between">
        <h1 className="text-base lg:text-xl">Best selling category</h1>
        <Button variant="link" className="text-blue-500">
          See All
        </Button>
      </div>
      <div className="w-full">
        {data && (
          <DataTable
            columns={bestSellingCategoryColumns}
            data={data?.slice(0, 3)}
          />
        )}
      </div>
    </div>
  );
};

export default BestSellingCategory;
