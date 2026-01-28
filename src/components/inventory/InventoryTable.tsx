import React, { useEffect, useState } from "react";
import { DataTable } from "../table/data-table";
import { inventoryProductsColumns } from "../table/columns";
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

const InventoryTable = ({ categories, products }: any) => {
  console.log("Categories", categories);
  console.log("Products", products);

  const [selectValue, setSelectValue] = React.useState<any>("all");
  const [updateProducts, setUpdateProducts] = useState<any>(products);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSelect = (value: string) => {
    setSelectValue(value);
  };

  const allPage = Math.ceil(updateProducts?.length / 10);

  const startIndex = (currentPage - 1) * 10;
  const endIndex = startIndex + 10;

  const currentPageProducts = updateProducts?.slice(startIndex, endIndex);
  console.log(Number(allPage));

  const handleSubmit = (e: any) => {
    console.log("Submit value", e);
  };

  useEffect(() => {
    if (!products) return;

    if (selectValue === "all") {
      setUpdateProducts(products);
      return;
    }

    const filteredProducts = products?.filter(
      (product: any) => product?.category === selectValue
    );

    setUpdateProducts(filteredProducts);
  }, [selectValue, products]);
  console.log("Select Value", selectValue);
  return (
    <div className="w-full h-fit bg-white rounded-sm p-6">
      <div className="w-full flex flex-col lg:flex-row gap-4 justify-between">
        <h1 className="text-xl">Products</h1>
        <div className="grid grid-flow-row grid-cols-2 lg:grid-flow-col gap-4">
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
                    <DialogTitle>New Product</DialogTitle>
                    <div className="flex flex-row justify-center items-center gap-4 relative">
                      <Input
                        className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
                        id="picture"
                        type="file"
                      />
                      <div className="h-20 w-20 border-2 border-dashed rounded-md flex items-center justify-center bg-slate-50 text-slate-400"></div>
                      <div className="text-center pointer-events-none">
                        Drag Image here <br /> or <br />{" "}
                        <Label
                          htmlFor="picture"
                          className="text-blue-500 cursor-pointer pointer-events-auto font-bold"
                        >
                          Browse Image
                        </Label>
                      </div>
                    </div>
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
                      <Label className="w-[30%]" htmlFor="expiryDate">
                        Expiry Date
                      </Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="Enter expiry date"
                        className="flex-1"
                      />
                    </div>

                    <div className="flex items-center gap-4">
                      <Label className="w-[30%]" htmlFor="threshold">
                        Threshold Value
                      </Label>
                      <Input
                        id="threshold"
                        name="threshold"
                        placeholder="Enter threshold value"
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
                  All Products
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
            Download All
          </Button>
        </div>
      </div>
      <div className="w-full py-4">
        {currentPageProducts && (
          <div className="flex flex-col gap-2">
            <DataTable
              columns={inventoryProductsColumns}
              data={currentPageProducts}
            />
            <div className="w-full flex justify-between gap-4">
              <Button
                size={"lg"}
                variant={"outline"}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className={`${
                  currentPage === 1 ? "invisible" : "visible"
                } rounded-none`}
              >
                Previous
              </Button>
              <span>
                Page {currentPage} to {allPage}
              </span>
              <Button
                size={"lg"}
                variant={"outline"}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className={`${
                  currentPage === Number(allPage) ? "invisible" : "visible"
                } rounded-none`}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryTable;
