import React from "react";

const OverallOrders = ({ data }: any) => {
  const { onTheWay, ordersReceived, totalOrders, totalReturned }: any =
    data || {};
  return (
    <div className="w-full h-fit bg-white rounded-sm p-4 flex flex-col gap-4">
      <h1 className="text-xl">Overall Orders</h1>

      <div className="w-full grid grid-flow-row grid-cols-2 lg:grid-flow-col lg:grid-cols-4 justify-between">
        <div className="flex flex-row">
          <div className="h-full w-full flex flex-col gap-2 xl:gap-4">
            <h1 className="font-bold text-blue-500">Total Orders</h1>
            <p className="font-bold">{onTheWay?.ordered}</p>
            <p className="text-gray-500 text-xs xl:text-sm">Last 7 days</p>
          </div>
          <div className="hidden lg:inline-block h-full w-0.5 self-stretch bg-neutral-300 dark:bg-white/10 md:mr-4"></div>
        </div>
        <div className="flex flex-row">
          <div className="h-full w-full flex flex-col gap-2 xl:gap-4">
            <h1 className="font-bold text-orange-500">Total Received</h1>
            <div className="flex flex-row justify-center items-center">
              <div className="w-full flex flex-col gap-2 xl:gap-4   justify-center items-start">
                <p className="font-bold">{ordersReceived?.last7Days}</p>
                <p className="text-gray-500 text-xs xl:text-sm">Last 7 days</p>
              </div>
              <div className="w-full flex flex-col gap-2 xl:gap-4 justify-center items-start">
                <p className="font-bold">{ordersReceived?.revenue}</p>
                <p className="text-gray-500 text-xs xl:text-sm">Revenue</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:inline-block h-full w-0.5 self-stretch bg-neutral-300 dark:bg-white/10 md:mr-4"></div>
        </div>
        <div className="flex flex-row">
          <div className="h-full w-full flex flex-col gap-2 xl:gap-4">
            <h1 className="font-bold text-violet-500">Total Returned</h1>
            <div className="flex flex-row justify-center items-center">
              <div className="w-full flex flex-col gap-2 xl:gap-4   justify-center items-start">
                <p className="font-bold">{totalReturned?.last7Days}</p>
                <p className="text-gray-500 text-xs xl:text-sm">Last 7 days</p>
              </div>
              <div className="w-full flex flex-col gap-2 xl:gap-4 justify-center items-start">
                <p className="font-bold">{totalReturned?.cost}</p>
                <p className="text-gray-500 text-xs xl:text-sm">Cost</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:inline-block h-full w-0.5 self-stretch bg-neutral-300 dark:bg-white/10 md:mr-4"></div>
        </div>
        <div className="h-full w-full flex flex-col gap-2 xl:gap-4">
          <h1 className="font-bold text-red-500">On the way</h1>
          <div className="flex flex-row justify-center items-center">
            <div className="w-full flex flex-col gap-2 xl:gap-4   justify-center items-start">
              <p className="font-bold">{onTheWay?.ordered}</p>
              <p className="text-gray-500 text-xs xl:text-sm">Ordered</p>
            </div>
            <div className="w-full flex flex-col gap-2 xl:gap-4  justify-center items-start">
              <p className="font-bold">{onTheWay?.cost}</p>
              <p className="text-gray-500 text-xs xl:text-sm">Cost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallOrders;
