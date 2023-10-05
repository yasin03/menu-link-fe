"use client";
import Categories from "@/component/components/admin/categories/Categories";
import React, { useState } from "react";
import CreateModal from "@/component/components/admin/categories/CreateModal";

const page = () => {
  return (
    <div className="flex-column items-center p-4 mx-20">
      <Categories />
    </div>
  );
};

export default page;
