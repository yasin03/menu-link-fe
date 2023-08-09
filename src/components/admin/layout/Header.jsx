"use client";
import React from "react";
import { useSession } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="h-14 p-4 bg-gray-100 shadow hidden md:flex justify-between ">
      <div>Logo</div>
      <div>Company {session?.user?.email}</div>
    </div>
  );
};

export default Header;
