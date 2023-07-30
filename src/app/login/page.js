"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/admin");
  };
  return (
    <div className="w-screen h-screen bg-red-400 flex  justify-center items-center bg-[url('/assets/img/login-bg.jpg')] bg-cover bg-no-repeat bg-center ">
      <div className="w-96 h-80 bg-gray-200 p-8 rounded-md shadow">
        <form>
          <label className="block mb-4">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700 ">
              Email
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Email"
            />
          </label>
          <label className="relative block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
              Password
            </span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Password"
            />
            <div className="absolute right-3 top-8 ">
              {showPassword ? (
                <BsEye
                  size={24}
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <BsEyeSlash
                  size={24}
                  className="text-gray-400 hover:text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </label>

          <button
            className="mt-8 w-full bg-rose-600 text-gray-100 rounded-md p-2 hover:bg-rose-700"
            onClick={handleSubmit}
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
