"use client";

import { ColumnDef } from "@tanstack/react-table";

export const topSellingColumns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "soldQuantity",
    header: "Sold Quantity",
  },
  {
    accessorKey: "remainingQuantity",
    header: "Remaining Quantity",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
];

export const inventoryProductsColumns: ColumnDef<any>[] = [
  {
    accessorKey: "name",
    header: "Products",
  },
  {
    accessorKey: "buyingPrice",
    header: "Buying Price",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "threshold",
    header: "Threshold Value",
  },
  {
    accessorKey: "expiryDate",
    header: "Expiry Date",
  },
  {
    accessorKey: "availability",
    header: "Availablility",
    cell: ({ row }) => {
      const availability = row.getValue("availability") as string;

      return (
        <span
          className={
            availability === "In Stock"
              ? "text-green-600 font-semibold"
              : availability === "Out of Stock"
              ? "text-red-600 font-semibold"
              : availability === "Medium Stock"
              ? "text-blue-600 font-semibold"
              : "text-yellow-600 font-semibold"
          }
        >
          {availability}
        </span>
      );
    },
  },
];
