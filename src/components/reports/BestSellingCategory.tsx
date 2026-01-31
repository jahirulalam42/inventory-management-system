import React from "react";
import { DataTable } from "../table/data-table";
import { bestSellingCategoryColumns } from "../table/columns";

const BestSellingCategory = ({ data }: any) => {
  console.log(data);
  return (
    <div className="flex-1 h-61 w-full lg:w-[50%] bg-white rounded-sm p-2 lg:p-4 flex flex-col gap-2">
      <h1 className="text-base lg:text-xl">Best selling category</h1>
      <div className="w-full py-4">
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
