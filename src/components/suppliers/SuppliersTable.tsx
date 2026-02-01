import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DataTable } from "../table/data-table";
import { suppliersColumns } from "../table/columns";
import Pagination from "../common/Pagination";

const SuppliersTable = ({ data, filters }: any) => {
  const [updatedProduct, setUpdatedProduct] = useState<any>(data);
  const [selectValue, setSelectValue] = useState<any>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productPerPage = 20;
  const allPage = Math.ceil(updatedProduct?.length / productPerPage);

  const startIndex = (currentPage - 1) * productPerPage;
  const endIndex = startIndex + productPerPage;

  const currentPageProduct = updatedProduct?.slice(startIndex, endIndex);

  const handleSubmit = (e: any) => {
    console.log("Submitted Event", e);
  };
  const handleSelect = (value: string) => {
    setSelectValue(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (!data) return;

    if (selectValue === "all") {
      setUpdatedProduct(data);
      return;
    }

    const filteredProducts = data?.filter(
      (product: any) => product?.type === selectValue
    );

    setUpdatedProduct(filteredProducts);
  }, [selectValue, data]);

  return (
    <div className="w-full h-fit bg-white rounded-sm p-4 flex flex-col gap-2">
      <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
        <h1 className="text-xl">Products</h1>
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 gap-4">
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
            <SelectTrigger size={"sm"} className="rounded-none w-30">
              <SelectValue placeholder="Filters" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filters</SelectLabel>

                <SelectItem value="all" defaultValue={"all"}>
                  All
                </SelectItem>

                {filters?.map((category: any, index: number) => {
                  return (
                    <SelectItem key={index} value={category}>
                      {category}
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

      <div className="w-full flex flex-col gap-2">
        {currentPageProduct && (
          <DataTable columns={suppliersColumns} data={currentPageProduct} />
        )}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          allPage={allPage}
        />
      </div>
    </div>
  );
};

export default SuppliersTable;
