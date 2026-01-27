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
      <div className="w-full flex justify-between">
        <h1 className="text-xl">Products</h1>
        <div className="flex flex-row gap-4">
          <Button size={"sm"} className="bg-blue-500 rounded-none">
            Add Product
          </Button>

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
            <div className="w-full flex justify-between">
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
