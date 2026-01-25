import React from "react";

const OverallInventory = () => {
  return (
    <div className="w-full h-47 bg-white rounded-s-2xl p-4 flex flex-col gap-4">
      <h1 className="text-xl">Overall Inventory</h1>

      <div className="w-full flex flex-row justify-between bordered border-2 border-blue-500">
        <div className="h-full w-full flex flex-col gap-2 xl:gap-4">
          <h1 className="font-bold text-blue-500">Categories</h1>
          <p className="font-bold">14</p>
          <p className="text-gray-500 text-xs xl:text-sm">Last 7 days</p>
        </div>
        <div className="hidden lg:inline-block h-full w-1 self-stretch bg-neutral-300 dark:bg-white/10 lg:mr-12"></div>
        <div className="h-full w-full flex flex-col gap-2 xl:gap-4">
          <h1 className="font-bold text-orange-500">Total Products</h1>
          <div className="flex flex-row justify-center items-center">
            <div className="w-full flex flex-col gap-2 xl:gap-4   justify-center items-start">
              <p className="font-bold">868</p>
              <p className="text-gray-500 text-xs xl:text-sm">Last 7 days</p>
            </div>
            <div className="w-full flex flex-col gap-2 xl:gap-4 justify-center items-start">
              <p className="font-bold">$25000</p>
              <p className="text-gray-500 text-xs xl:text-sm">Revenue</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline-block h-full w-1 self-stretch bg-neutral-300 dark:bg-white/10 lg:mr-12"></div>
        <div className="h-full w-full flex flex-col gap-2 xl:gap-4">
          <h1 className="font-bold text-violet-500">Top Selling</h1>
          <div className="flex flex-row justify-center items-center">
            <div className="w-full flex flex-col gap-2 xl:gap-4   justify-center items-start">
              <p className="font-bold">5</p>
              <p className="text-gray-500 text-xs xl:text-sm">Last 7 days</p>
            </div>
            <div className="w-full flex flex-col gap-2 xl:gap-4 justify-center items-start">
              <p className="font-bold">$2500</p>
              <p className="text-gray-500 text-xs xl:text-sm">Cost</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline-block h-full w-1 self-stretch bg-neutral-300 dark:bg-white/10 lg:mr-12"></div>
        <div className="h-full w-full flex flex-col gap-2 xl:gap-4">
          <h1 className="font-bold text-red-500">Low Stocks</h1>
          <div className="flex flex-row justify-center items-center">
            <div className="w-full flex flex-col gap-2 xl:gap-4   justify-center items-start">
              <p className="font-bold">12</p>
              <p className="text-gray-500 text-xs xl:text-sm">Ordered</p>
            </div>
            <div className="w-full flex flex-col gap-2 xl:gap-4  justify-center items-start">
              <p className="font-bold">2</p>
              <p className="text-gray-500 text-xs xl:text-sm">Not in stock</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallInventory;
