import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export interface Product {
  Id: string;
  Name: string;
  Price: number;
  rating?: number;
  StockQuantity: number;
}

export interface SalesSummary {
  SalesSummaryId: string;
  TotalValue: number;
  ChangePercentage?: number;
  DateCreated: string;
}

export interface ExpenseSummary {
    ExpenseSummaryid:string; 
    TotalExpenses:number; 
    DateCreated:string; 
}

export interface PurchaseSummary {
    PurchaseSummaryId:string 
    TotalPurchased:number; 
    ChangePercentage:number; 
    DateCreated:string; 
}

export interface ExpenseByCategory {
    ExpenseByCategoryId:string; 
    ExpenseSummaryid:string; 
    DateCreated:string; 
    Category:string; 
    Amount:number; 
}

export interface DashboardMetrics {
  PopularProducts: Product[];
  SalesSummaries: SalesSummary[];
  ExpenseSummaries: ExpenseSummary[];
  PurchaseSummaries: PurchaseSummary[];
  ExpenseByCategories: ExpenseByCategory[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["DashboardMetrics"],
  endpoints: (build) => ({
    getDashboardMetrics: build.query<DashboardMetrics,void>({
      query: () => "/dashboard",
      providesTags: ["DashboardMetrics"],
    }),
  }),
});

export const {
    useGetDashboardMetricsQuery
} = api;
