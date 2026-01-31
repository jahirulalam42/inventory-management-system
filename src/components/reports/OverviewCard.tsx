import React from "react";

const OverviewCard = ({ data }: any) => {
  console.log(data);
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
    <div className="flex-1 h-fit w-[50%] bg-white rounded-sm p-2 lg:p-6 flex flex-col gap-2 lg:gap-6">
      <h1 className="text-xl">Overview</h1>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-col gap-4">
          <span>${totalProfit}</span>
          <p className="text-xs lg:text-sm text-gray-500">Total Profit</p>
        </div>

        <div className="flex flex-col gap-4">
          <span>${totalRevenue}</span>
          <p className="text-xs lg:text-sm text-orange-400">Revenue</p>
        </div>

        <div className="flex flex-col gap-4">
          <span>${totalSales}</span>
          <p className="text-xs lg:text-sm text-violet-500">Sales</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
        <div className="flex flex-col lg:gap-4">
          <span>${netPurchasedValue}</span>
          <p className="text-xs lg:text-sm text-gray-500">Net purchase value</p>
        </div>

        <div className="flex flex-col lg:gap-4">
          <span>${netSalesValue}</span>
          <p className="text-xs lg:text-sm text-gray-500">Net sales value</p>
        </div>

        <div className="flex flex-col lg:gap-4">
          <span>${momProfit}</span>
          <p className="text-xs lg:text-sm text-gray-500">MoM Profit</p>
        </div>

        <div className="flex flex-col lg:gap-4">
          <span>${yoyProfit}</span>
          <p className="text-xs lg:text-sm text-gray-500">YoY Profit</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
