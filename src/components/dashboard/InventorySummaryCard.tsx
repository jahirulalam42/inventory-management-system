import Image from "next/image";
import React from "react";
import quantityIcon from "../../../public/images/Quantity.png";
import onTheWayIcon from "../../../public/images/On the way.png";

const InventorySummaryCard = ({ data }: any) => {
  return (
    <div className="w-full h-40.75 flex flex-col justify-center p-6 gap-4 rounded-sm bg-white">
      <h1 className="h-[20%] flex-auto text-xl">Inventory Summary</h1>
      <div className="flex flex-row justify-between h-[80%] flex-auto font-semibold">
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <span className="bg-orange-100 p-1 rounded-sm">
            <Image src={quantityIcon} alt="salesicon" />
          </span>
          <span className="w-full flex flex-col justify-center items-center">
            <span> {data?.quantityInHand}</span>
            <span className="text-gray-500">Quantity in Hand</span>
          </span>
        </div>
        <div className="inline-block h-full w-1 self-stretch bg-neutral-300 dark:bg-white/10"></div>
        <div className="flex flex-col justify-center items-center  w-full gap-4">
          <span className="bg-violet-100 p-1 rounded-sm">
            <Image src={onTheWayIcon} alt="salesicon" />
          </span>
          <span className="w-full flex flex-col justify-center items-center">
            <span> {data?.toBeReceived}</span>
            <span className="text-gray-500">To be received</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default InventorySummaryCard;
