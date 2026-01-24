import Image from "next/image";
import React from "react";
import salesIcon from "../../../public/images/Sales.svg";
import revenueIcon from "../../../public/images/Revenue.svg";
import profitIcon from "../../../public/images/Profit.svg";
import costIcon from "../../../public/images/Cost.svg";

const SalesOverviewCard = ({ data }: any) => {
  return (
    <div className="w-full h-40.75 flex flex-col justify-center py-1 lg:p-6 gap-4 rounded-sm bg-white">
      <h1 className="h-[20%] flex-auto text-xl">Sales Overview</h1>
      <div className="flex flex-row justify-between h-[80%] flex-auto font-semibold">
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <span className="bg-blue-100 p-1 rounded-sm">
            <Image src={salesIcon} alt="salesicon" />
          </span>
          <span className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8">
            <span>${data?.sales}</span>
            <span className="text-gray-500">Sales</span>
          </span>
        </div>
        <div className="hidden lg:inline-block h-full w-1 self-stretch bg-neutral-300 dark:bg-white/10"></div>
        <div className="flex flex-col justify-center items-center  w-full gap-4">
          <span className="bg-violet-100 p-1 rounded-sm">
            <Image src={revenueIcon} alt="salesicon" />
          </span>
          <span className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8">
            <span>${data?.revenue}</span>
            <span className="text-gray-500">Revenue</span>
          </span>
        </div>
        <div className="hidden lg:inline-block h-full w-1 self-stretch bg-neutral-300 dark:bg-white/10"></div>
        <div className="flex flex-col justify-center items-center  w-full gap-4">
          <span className="bg-orange-100 p-1 rounded-sm">
            <Image src={profitIcon} alt="salesicon" />
          </span>
          <span className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8">
            <span>${data?.profit}</span>
            <span className="text-gray-500">Profit</span>
          </span>
        </div>
        <div className="hidden lg:inline-block h-full  w-1 self-stretch bg-neutral-300 dark:bg-white/10"></div>
        <div className="flex flex-col justify-center items-center border-green-600 w-full gap-4">
          <span className="bg-green-100 p-1 rounded-sm">
            <Image src={costIcon} alt="salesicon" />
          </span>
          <span className="w-full flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8">
            <span>${data?.cost}</span>
            <span className="text-gray-500">Cost</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalesOverviewCard;
