import React, { useEffect, useState } from "react";
import { DataTable } from "../table/data-table";
import { ordersColums } from "../table/columns";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import Pagination from "../common/Pagination";

const OrdersTable = ({ categories, orders }: any) => {
  const [selectValue, setSelectValue] = React.useState<any>("all");
  const [updateorders, setUpdateorders] = useState<any>(orders);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSelect = (value: string) => {
    setSelectValue(value);
    setCurrentPage(1);
  };

  const allPage = Math.ceil(updateorders?.length / 10);

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;

  const currentPageorders = updateorders?.slice(startIndex, endIndex);

  const handleSubmit = (e: any) => {
    // console.log("Submit value", e);
  };

  useEffect(() => {
    if (!orders) return;

    if (selectValue === "all") {
      setUpdateorders(orders);
      return;
    }

    const filteredorders = orders?.filter(
      (product: any) => product?.category === selectValue
    );

    setUpdateorders(filteredorders);
  }, [selectValue, orders]);
  return (
    <div className="w-full h-fit bg-white rounded-sm p-6">
      <div className="w-full flex flex-col lg:flex-row gap-4 justify-between">
        <h1 className="text-xl">Orders</h1>
        <div className="grid grid-flow-row grid-cols-2 lg:grid-flow-col lg:grid-rows-1 gap-4">
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size={"sm"} className="bg-blue-500 rounded-none">
                  Add Product
                </Button>
              </DialogTrigger>
              <form onSubmit={handleSubmit}>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>New Order</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4">
                    {/* Use flex instead of grid for the row */}
                    <div className="flex items-center gap-4">
                      <Label className="w-[30%]" htmlFor="name">
                        Product Name
                      </Label>
                      {/* Use flex-1 to tell it to "grow to fill remaining space" */}
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter Product Name"
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <Label className="w-[30%]" htmlFor="productId">
                        Product ID
                      </Label>
                      <Input
                        id="productId"
                        name="productId"
                        placeholder="Enter product id"
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <Label className="w-[30%]" htmlFor="category">
                        Category
                      </Label>
                      <Input
                        id="category"
                        name="category"
                        placeholder="Enter product category"
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <Label className="w-[30%]" htmlFor="orderValue">
                        Order value
                      </Label>
                      <Input
                        id="orderValue"
                        name="orderValue"
                        placeholder="Enter order value"
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <Label className="w-[30%]" htmlFor="quantity">
                        Quantity
                      </Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        placeholder="Enter product quantity"
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <Label className="w-[30%]" htmlFor="unit">
                        Unit
                      </Label>
                      <Input
                        id="unit"
                        name="unit"
                        placeholder="Enter product unit"
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <Label className="w-[30%]" htmlFor="buyingPrice">
                        Buying Price
                      </Label>
                      <Input
                        id="buyingPrice"
                        name="buyingPrice"
                        placeholder="Enter buying price"
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <Label className="w-[30%]" htmlFor="dateOfDelivery">
                        Date of delivery
                      </Label>
                      <Input
                        id="dateOfDelivery"
                        name="dateOfDelivery"
                        placeholder="Enter date of delivery"
                        className="flex-1"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        variant="outline"
                        size={"sm"}
                        className="rounded-none"
                      >
                        Discard
                      </Button>
                    </DialogClose>
                    <Button
                      type="submit"
                      size={"sm"}
                      className="bg-blue-500 rounded-none"
                    >
                      Add Product
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>

          <Select onValueChange={handleSelect}>
            <SelectTrigger size={"sm"} className="w-full rounded-none max-w-48">
              <SelectValue placeholder="Filters" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filters</SelectLabel>

                <SelectItem value="all" defaultValue={"all"}>
                  All
                </SelectItem>

                {categories?.map((category: any) => {
                  return (
                    <SelectItem key={category?.id} value={category?.name}>
                      {category?.name}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Button size={"sm"} variant={"outline"} className="rounded-none">
            Order History
          </Button>
        </div>
      </div>
      <div className="w-full py-4">
        {currentPageorders && (
          <div className="flex flex-col gap-2">
            <DataTable columns={ordersColums} data={currentPageorders} />
            <div>
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                allPage={allPage}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersTable;
