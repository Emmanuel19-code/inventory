"use client";
import Header from "@/components/Header";
import Rating from "@/components/Rating";
import { useGetSearchProductQuery } from "@/state/api";
import { PlusCircleIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    data: products,
    isLoading,
    isError,
  } = useGetSearchProductQuery(searchTerm);
  if (isLoading) {
    return <div className="py-y">Loading...</div>;
  }
  //if (isError || !products) {
  //  return (
  //    <div className="text-center text-red-500 py-4">
  //      Failed to fetch products
  //    </div>
  //  );
  //}
  return (
    <div className="mx-auto pb-5 w-full">
      <div className="mb-6">
        <div className="flex">
          <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
          <input
            className="w-full py-2 px-4 rounded bg-white"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <Header name="Products" />
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray- font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
            <PlusCircleIcon className="w- h- mr-2 !text-gray-200"/>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 gap-10 justify-between">
            {
                isLoading ? <div>Loadin...</div> : products?.map((product)=>(
                    <div key={1} className="border shadow rounded-md p-4 max-w-full w-full mx-auto">
                      <div className="flex flex-col items-center">
                         <h3 className="text-lg text-gray-900 font-semibold">{product.Name}</h3>
                         <p className="text-gray-800">${product.Price.toFixed(2)}</p>
                         <div className="text-sm text-gray-600 mt-1">
                              Stock: {product.StockQuantity}
                         </div>
                         {
                            product.Rating && (
                                <div className="flex items-center mt-2">
                                     <Rating rating={product.Rating}/>
                                </div>
                            )
                         }
                      </div>
                    </div>
                ))
            }
      </div>
    </div>
  );
};

export default Products;
