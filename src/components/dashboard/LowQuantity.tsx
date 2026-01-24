import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const LowQuantity = ({ data }: any) => {
  console.log(data);
  return (
    <div className="w-full h-77 bg-white rounded-sm p-6">
      <div className="w-full flex flex-row justify-between">
        <h1 className="flex-auto text-xl">Low Quantity Stock</h1>
        <Button variant="link" className="text-blue-500">
          See All
        </Button>
      </div>

      {data?.slice(0, 3).map((low: any) => {
        return (
          <div
            key={low?.id}
            className="flex flex-row justify-between py-2 px-4"
          >
            <span className="w-15 h-17.5">
              <Image
                src={low?.thumbnail}
                alt="Product Image"
                width={100}
                height={100}
              />
            </span>
            <div className="flex flex-col justify-center items-start">
              <h1>{low?.productName}</h1>
              <p>Remaining Quantity: {low?.remainingQuantity}</p>
            </div>
            <span className="flex justify-center items-center">
              {low?.status === "low" ? (
                <span className="bg-red-200 text-red-800 px-2 rounded-full">
                  Low
                </span>
              ) : low?.status === "medium" ? (
                <span className="bg-yellow-200 text-yellow-800 px-2 rounded-full">
                  Medium
                </span>
              ) : low?.status === "high" ? (
                <span className="bg-green-200 text-green-800 px-2 rounded-full">
                  High
                </span>
              ) : (
                <span></span>
              )}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default LowQuantity;
