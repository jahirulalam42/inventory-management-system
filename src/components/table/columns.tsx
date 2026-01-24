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
