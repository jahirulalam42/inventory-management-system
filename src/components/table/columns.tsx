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
  },
];
