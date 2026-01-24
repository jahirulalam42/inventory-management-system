import Image from "next/image";
import React from "react";
import purchaseIcon from "../../../public/images/Purchase bag.svg";
import cancelIcon from "../../../public/images/Cancel.svg";
import profitIcon from "../../../public/images/Profit.svg";
import costIcon from "../../../public/images/Cost.svg";

const PurchaseOverviewCard = ({ data }: any) => {
  return (
    <div className="w-full h-40.75 flex flex-col justify-center py-1 lg:p-6 gap-4 rounded-sm bg-white">
      <h1 className="h-[20%] flex-auto text-xl">Purchase Overview</h1>
      <div className="flex flex-row justify-between h-[80%] flex-auto font-semibold">
        <div className="flex flex-col justify-center items-center w-full gap-4 text-center">
          <span className="bg-sky-100 p-1 rounded-sm">
            <Image src={purchaseIcon} alt="salesicon" />
          </span>
          <span className="w-full flex flex-col lg:flex-row justify-center lg:gap-8">
            <span>{data?.purchases}</span>
            <span className="text-gray-500">Purchase</span>
          </span>
        </div>
        <div className="hidden lg:inline-block h-full w-1 self-stretch bg-neutral-300 dark:bg-white/10"></div>
        <div className="flex flex-col justify-center items-center  w-full gap-4 text-center">
          <span className="bg-green-100 p-1 rounded-sm">
            <Image src={costIcon} alt="salesicon" />
          </span>
          <span className="w-full flex flex-col lg:flex-row justify-center lg:gap-8">
            <span>${data?.cost}</span>
            <span className="text-gray-500">Cost</span>
          </span>
        </div>
        <div className="hidden lg:inline-block h-full w-1 self-stretch bg-neutral-300 dark:bg-white/10"></div>
        <div className="flex flex-col justify-center items-center  w-full gap-4 text-center">
          <span className="bg-violet-100 p-1 rounded-sm">
            <Image src={cancelIcon} alt="salesicon" />
          </span>
          <span className="w-full flex flex-col lg:flex-row justify-center lg:gap-8">
            <span>{data?.cancel}</span>
            <span className="text-gray-500">Cancel</span>
          </span>
        </div>
        <div className="hidden lg:inline-block h-full  w-1 self-stretch bg-neutral-300 dark:bg-white/10"></div>
        <div className="flex flex-col justify-center items-center border-green-600 w-full gap-4 text-center">
          <span className="bg-orange-100 p-1 rounded-sm">
            <Image src={profitIcon} alt="salesicon" />
          </span>
          <span className="w-full flex flex-col lg:flex-row justify-center lg:gap-8">
            <span>${data?.return}</span>
            <span className="text-gray-500">Return</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOverviewCard;
