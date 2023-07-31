"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import links from "./navlinks.json";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-8 md:px-12 lg:px-24 py-4 bg-gray-50 shadow flex">
      <div className="flex-1 flex items-center">Logo</div>
      <div className="md:hidden transition-all ease-in duration-500">
        {open ? (
          <HiMenuAlt3
            size={26}
            className="cursor-pointer my-3 "
            onClick={() => setOpen(!open)}
          />
        ) : (
          <MdClose
            size={26}
            className="cursor-pointer my-3 "
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      <div
        className={`${
          open
            ? "hidden"
            : "shrink flex items-center absolute md:static z-[10] flex-col bg-gray-100 w-full md:w-auto left-0 top-20 h-80 md:h-full gap-2 pt-6 md:pt-0 md:flex-row md:items-center md:justify-center transition-all ease-in duration-500"
        }  `}
      >
        <ul className="flex flex-col gap-5 md:flex-row  text-gray-600 ">
          {links.map((link, index) => (
            <li
              key={index}
              className="hover:text-gray-400 w-32 flex justify-center "
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <Link href="/login">
          <button className="bg-rose-600 text-gray-100 py-2 px-6 rounded mt-8 md:mt-0 md:ml-8 hover:bg-rose-700">
            Giriş Yap
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
