import Image from "next/image";
import React from "react";
import categoriesIcon from "../../../public/images/Categories.png";
import suppliersIcon from "../../../public/images/Suppliers.png";

const ProductSummaryCard = ({ data }: any) => {
  return (
    <div className="w-full h-40.75 flex flex-col justify-center py-6 lg:p-6 gap-4 rounded-sm bg-white">
      <h1 className="h-[20%] flex-auto text-xl">Product Summary</h1>
      <div className="flex flex-row justify-between h-[80%] flex-auto font-semibold">
        <div className="flex flex-col justify-center items-center w-full text-center gap-2 xl:gap-4">
          <span className="bg-sky-100 p-1 rounded-sm">
            <Image src={suppliersIcon} alt="salesicon" />
          </span>
          <span className="w-full flex flex-col justify-center items-center">
            <span> {data?.categories}</span>
            <span className="text-gray-500 text-sm xl:text-md">
              Number of Suppliers
            </span>
          </span>
        </div>
        <div className="hidden lg:inline-block h-full w-1 self-stretch bg-neutral-300 dark:bg-white/10"></div>
        <div className="flex flex-col justify-center items-center  w-full text-center gap-2 xl:gap-4">
          <span className="bg-violet-100 p-1 rounded-sm">
            <Image src={categoriesIcon} alt="salesicon" />
          </span>
          <span className="w-full flex flex-col justify-center items-center">
            <span> {data?.suppliers}</span>
            <span className="text-gray-500 text-sm xl:text-md">
              Number of Categories
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductSummaryCard;
