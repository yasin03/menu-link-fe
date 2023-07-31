"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiSolidExit } from "react-icons/bi";
import {
  MdSpaceDashboard,
  MdCategory,
  MdFastfood,
  MdPerson,
} from "react-icons/md";

const menus = [
  { name: "Dashboard", link: "/admin", icon: MdSpaceDashboard },
  { name: "Kategoriler", link: "/admin/categories", icon: MdCategory },
  { name: "Ürünler", link: "/admin/products", icon: MdFastfood },
  { name: "Personel", link: "/admin/staff", icon: MdPerson },
  { name: "Çıkış", link: "/admin", icon: BiSolidExit },
];
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div
      className={`${
        open ? " w-72" : " w-24"
      } bg-gray-950 text-gray-200 h-screen transition-all shadow`}
    >
      <div
        className={`flex border-b ${open ? "justify-end" : "justify-center "}`}
      >
        <HiMenuAlt3
          size={26}
          className="cursor-pointer m-4 "
          onClick={() => setOpen(!open)}
        />
      </div>
      <ul className="mt-4 flex flex-col gap-1 relative">
        {menus.map((menu, index) => (
          <Link
            key={index}
            href={menu.link}
            className={`p-3 hover:bg-gray-800 flex items-center gap-2 ${
              !open && "justify-center py-6"
            }`}
          >
            <div>{React.createElement(menu?.icon, { size: "24" })}</div>
            <li
              className={`${
                !open && "hidden"
              } text-lg whitespace-pre duration-500`}
            >
              {menu?.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
