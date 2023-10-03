"use client";
import React from "react";
import Products from "@/component/components/admin/products/Products";

const page = () => {

  return (
    <div className="p-4">
      ürünler
      <div className="flex-column items-center mx-auto p-4 ">
        <Products />
      </div>
    </div>
  );
  
};

export default page;
