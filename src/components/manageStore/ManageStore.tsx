import React from "react";
import { Button } from "../ui/button";

const ManageStore = ({ data }: any) => {
  console.log("Store Data", data);
  return (
    <div className="w-full rounded-sm p-4 bg-white flex flex-col gap-6">
      <div className="flex flex-row justify-between">
        <h1 className="text-xl">Manage Store</h1>
        <Button
          size={"default"}
          variant={"default"}
          className="bg-blue-600 rounded-none"
        >
          Add Store
        </Button>
      </div>

      {data?.map((store: any) => {
        const {
          id,
          storeName,
          manager,
          storeAddress,
          openingHours,
          phoneNumber,
        } = store;
        return (
          <div
            className="h-fit flex flex-col gap-4 lg:flex-row mx-6 lg:mx-10 shadow-sm"
            key={id}
          >
            <div className="flex-auto w-full lg:w-72.5 h-37.5 bg-gray-200 flex justify-center items-center">
              <h1 className="font-semibold text-lg text-center">{storeName}</h1>
            </div>
            <div className="flex-auto w-full flex flex-row justify-between p-4">
              <div className="flex flex-col xl:gap-2 text-xs lg:text-sm text-gray-600">
                <h1 className="text-lg font-semibold">{manager}</h1>{" "}
                <p>{storeAddress}</p> <p>{openingHours}</p>{" "}
                <span>{phoneNumber}</span>
              </div>
              <Button
                variant={"outline"}
                size={"default"}
                className="text-blue-600"
              >
                Edit
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ManageStore;
