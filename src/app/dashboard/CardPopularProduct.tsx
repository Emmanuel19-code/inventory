"use client";
import Rating from "@/components/Rating";
import { useGetDashboardMetricsQuery } from "@/state/api";
import { ShoppingBag } from "lucide-react";
import React from "react";

const CardPopularProduct = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  return (
    <div className="bg-white shadow-md rounded-2xl pb-16 row-span-3 xl:row-span-6">
      {isLoading ? (
        <div className="m-5 ">Loading....</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Popular Product
          </h3>
          <hr />
          <div className="overflow-auto h-full">
            {dashboardMetrics?.PopularProducts.map((product) => (
              <div
                key={product.Id}
                className="flex items-center justify-between gap-3 px-5 py-7 border-b"
              >
                <div className="flex items-center gap-3">
                  <div>img</div>
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-gray-700 ">
                      {product.Name}
                    </div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-blue-500 text-xs">
                        ${product.Price}
                      </span>
                      <span className="mx-2">|</span>
                      <Rating rating={product.Rating || 0}/>
                    </div>
                  </div>
                </div>
                <div className="text-xs flex items-center">
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  {Math.round(product.StockQuantity/1000)}k Sold
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProduct;
