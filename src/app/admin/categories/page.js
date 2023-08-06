"use client";
import Categories from "@/component/components/admin/categories/Categories";
import React, { useState } from "react";
import CreateModal from "@/component/components/admin/categories/CreateModal";

const page = () => {
  return (
    <div className="flex-column items-center mx-auto p-4 ">
      <Categories />
    </div>
  );
};

export default page;
