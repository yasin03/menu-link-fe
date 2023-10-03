"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import secureLocalStorage from "react-secure-storage";
const Personal = () => {
  const isLogin = useSelector((state) => state.auth.isUserLogin);
  const token = secureLocalStorage.getItem("@secure.s.token");
  console.log("islogin--", isLogin);
  console.log("token--", token);
  return <div className="p-4">Personal ---</div>;
};

export default Personal;
