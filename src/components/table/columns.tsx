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

export const bestSellingCategoryColumns: ColumnDef<any>[] = [
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "previousTurnover",
    header: "Turn Over",
  },
  {
    accessorKey: "increasedBy",
    header: "Increase By",
    cell: ({ row }) => {
      const increasedBy = row.getValue("increasedBy") as string;

      return (
        <span className="text-green-600 font-semibold">{increasedBy}%</span>
      );
    },
  },
];

export const bestSellingProductColumns: ColumnDef<any>[] = [
  {
    accessorKey: "productName",
    header: "Product",
  },
  {
    accessorKey: "productId",
    header: "Product ID",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "remainingQuantity",
    header: "Remaining Quantity",
  },
  {
    accessorKey: "turnover",
    header: "Turn Over",
  },
  {
    accessorKey: "increaseBy",
    header: "Increase By",
    cell: ({ row }) => {
      const increasedBy = row.getValue("increaseBy") as string;

      return (
        <span className="text-green-600 font-semibold">{increasedBy}%</span>
      );
    },
  },
];

export const suppliersColumns: ColumnDef<any>[] = [
  {
    accessorKey: "supplierName",
    header: "Supplier Name",
  },
  {
    accessorKey: "products",
    header: "Product",
  },
  {
    accessorKey: "contactNumber",
    header: "Contact Number",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "onTheWay",
    header: "On the way",
  },
];

export const ordersColums: ColumnDef<any>[] = [
  {
    accessorKey: "product",
    header: "Products",
  },
  {
    accessorKey: "orderValue",
    header: "Order Value",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "orderId",
    header: "Order ID",
  },
  {
    accessorKey: "expectedDelivery",
    header: "Expected Delivery",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const availability = row.getValue("status") as string;

      return (
        <span
          className={
            availability === "Delivered"
              ? "text-green-600 font-semibold"
              : availability === "Cancelled"
              ? "text-red-600 font-semibold"
              : availability === "Returned"
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
