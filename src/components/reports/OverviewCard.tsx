import React from "react";

const OverviewCard = ({ data }: any) => {
  const {
    totalProfit,
    totalRevenue,
    totalSales,
    netPurchasedValue,
    netSalesValue,
    momProfit,
    yoyProfit,
  } = data || {};
  return (
    <div className="flex-1 h-61 w-full lg:w-[50%] bg-white rounded-sm p-2 xl:p-4 flex flex-col gap-2 xl:gap-4">
      <h1 className="text-base lg:text-xl">Overview</h1>
      <div className="w-full flex flex-row justify-between gap-2 lg:gap-6 font-semibold">
        <div className="flex flex-col gap-4">
          <span className="text-xs md:text-base">${totalProfit}</span>
          <p className="text-xs lg:text-sm text-gray-500">Total Profit</p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs md:text-base">${totalRevenue}</span>
          <p className="text-xs lg:text-sm text-orange-400">Revenue</p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs md:text-base">${totalSales}</span>
          <p className="text-xs lg:text-sm text-violet-500">Sales</p>
        </div>
      </div>

      <div>
        <hr className="h-px my-2 bg-neutral-quaternary border-0.5"></hr>
      </div>

      <div className="w-full flex flex-row justify-between gap-2 lg:gap-6 font-semibold">
        <div className="flex flex-col lg:gap-4">
          <span className="text-xs md:text-base">${netPurchasedValue}</span>
          <p className="text-xs lg:text-sm text-gray-500">Net purchase value</p>
        </div>

        <div className="flex flex-col lg:gap-4">
          <span className="text-xs md:text-base">${netSalesValue}</span>
          <p className="text-xs lg:text-sm text-gray-500">Net sales value</p>
        </div>

        <div className="flex flex-col lg:gap-4">
          <span className="text-xs md:text-base">${momProfit}</span>
          <p className="text-xs lg:text-sm text-gray-500">MoM Profit</p>
        </div>

        <div className="flex flex-col lg:gap-4">
          <span className="text-xs md:text-base">${yoyProfit}</span>
          <p className="text-xs lg:text-sm text-gray-500">YoY Profit</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
