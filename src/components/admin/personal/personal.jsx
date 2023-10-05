"use client";
import { getCategoriesAll } from "@/component/api/category-service";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import secureLocalStorage from "react-secure-storage";
const Personal = () => {
  const isLogin = useSelector((state) => state.auth.isUserLogin);
  const token = secureLocalStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState();

  console.log(categories);

  const loadData = async () => {
    try {
      setLoading(true);
      const resp = await getCategoriesAll();
      setCategories(resp.data.content);
      console.log("rest--", resp.data.content);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return <div className="p-4">Personal </div>;
};

export default Personal;
