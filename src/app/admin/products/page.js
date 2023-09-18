"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Products from "@/component/components/admin/products/Products";

const page = () => {
  const { data: session } = useSession();
  console.log(session?.user?.key);
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
