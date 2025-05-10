import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  id: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}
export interface NewProduct {
  Name: string;
  Price: number;
  Rating: number;
  StockQuantity: number;
}
export interface SalesSummary {
  SalesSummaryId: string;
  TotalValue: number;
  ChangePercentage?: number;
  DateCreated: string;
}

export interface ExpenseSummary {
  ExpenseSummaryid: string;
  TotalExpenses: number;
  DateCreated: string;
}

export interface PurchaseSummary {
  PurchaseSummaryId: string;
  TotalPurchased: number;
  ChangePercentage: number;
  DateCreated: string;
}

export interface ExpenseByCategory {
  ExpenseByCategoryId: string;
  ExpenseSummaryid: string;
  DateCreated: string;
  Category: string;
  Amount: number;
}

export interface DashboardMetrics {
  PopularProducts: Product[];
  SalesSummaries: SalesSummary[];
  ExpenseSummary: ExpenseSummary[];
  PurchaseSummaries: PurchaseSummary[];
  ExpenseByCategory: ExpenseByCategory[];
}

export interface User {
  Name:string;
}



export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["DashboardMetrics", "Products", "SearchProduct","Users"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetrics, void>({
      query: () => "/dashboard",
      providesTags: ["DashboardMetrics"],
    }),
    getProducts: build.query<Product[], void>({
      query: () => "/product",
      transformResponse: (response: { data: Product[] }) => response.data,
      providesTags: ["Products"],
    }),
    getSearchProduct: build.query<Product[], string>({
      query: (search) => ({
        url: "/searchProduct",
        params: search?.trim() ? { search } : undefined, // 👈 Correct fallback
      }),
      transformResponse: (response: { data: Product[] }) => response.data, // 👈 Unwrap if backend wraps
      providesTags: ["SearchProduct"],
    }),    
    createProduct: build.mutation<Product, NewProduct>({
      query: (newProduct) => ({
        url: "/addProduct",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Products"],
    }),
    getUsers: build.query<User[],void>({
       query:()=>"/users",
       providesTags:["Users"]
    }),
    getExpensesByCategory:build.query({
      query:()=>"/expenseByCategory"
    })
  }),
});

export const {
  useGetDashboardMetricsQuery,
  useGetProductsQuery,
  useCreateProductMutation,
  useGetSearchProductQuery,
  useGetUsersQuery,
  useGetExpensesByCategoryQuery
} = api;
