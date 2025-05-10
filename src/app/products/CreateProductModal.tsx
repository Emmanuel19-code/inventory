"use client";
import Header from "@/components/Header";
import React, { ChangeEvent, FormEvent, useState } from "react";

type ProductFormData = {
  Name: string;
  Price: number;
  StockQuantity: number;
  Rating: number;
};

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
};

const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    Name: "",
    Price: 0,
    StockQuantity: 0,
    Rating: 0,
  });
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name,value} = e.target;
    setFormData({
        ...formData,
        [name]: name === "Price" || name === "StockQuantity" || name === "Rating" ? parseFloat(value) : value
    })
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    onCreate(formData);
    onClose();
  };
  if (!isOpen) return null;

  const labelCssStyles = "block text-sm font-medium text-gray-700";
  const inputCssStyles =
    "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";
  return (
    <div className="fixed  inset-0 bg-opacity-50 overflow-y-auto h-full w-full z-20">
    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
      <Header name="Create New Product" />
      <form onSubmit={handleSubmit} className="mt-5">
        {/* PRODUCT NAME */}
        <label htmlFor="productName" className={labelCssStyles}>
          Product Name
        </label>
        <input
          type="text"
          name="Name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.Name}
          className={inputCssStyles}
          required
        />

        {/* PRICE */}
        <label htmlFor="productPrice" className={labelCssStyles}>
          Price
        </label>
        <input
          type="number"
          name="Price"
          placeholder="Price"
          onChange={handleChange}
          value={formData.Price}
          className={inputCssStyles}
          required
        />

        {/* STOCK QUANTITY */}
        <label htmlFor="stockQuantity" className={labelCssStyles}>
          Stock Quantity
        </label>
        <input
          type="number"
          name="StockQuantity"
          placeholder="Stock Quantity"
          onChange={handleChange}
          value={formData.StockQuantity}
          className={inputCssStyles}
          required
        />

        {/* RATING */}
        <label htmlFor="rating" className={labelCssStyles}>
          Rating
        </label>
        <input
          type="number"
          name="Rating"
          placeholder="Rating"
          onChange={handleChange}
          value={formData.Rating}
          className={inputCssStyles}
          required
        />

        {/* CREATE ACTIONS */}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Create
        </button>
        <button
          onClick={onClose}
          type="button"
          className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
  );
};

export default CreateProductModal;
