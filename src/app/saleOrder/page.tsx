"use client";
import Header from "@/components/Header";
import { useGetProductsQuery } from "@/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

const columns: GridColDef[] = [
  { field: "saleId", headerName: "ID", width: 200 },
  {
    field: "createcBy",
    headerName: "User Created",
    width: 200,
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "price",
    headerName: "Total Amount",
    width: 200,
    type: "number",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "dateCreated",
    headerName: "Date Created",
    width: 200,
    type: "date",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  { field: "name", headerName: "Customer Name", width: 200 },
];

const SaleOrderPage = () => {
      const { data: products, isError, isLoading } = useGetProductsQuery();
      if (isLoading) {
        return <div className="py-4">Loading...</div>;
      }
      if (isError || !products) {
        return (
          <div className="text-center text-red-500 py-4">
            Failed to fetch products
          </div>
        );
      }
  return (
    <div className="flex flex-col">
    <Header name="Sales Orders" />
    <DataGrid
      rows={products}
      columns={columns}
      getRowId={(row) => row.productId}
      checkboxSelection
      className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
    />
  </div>
  )
}

export default SaleOrderPage