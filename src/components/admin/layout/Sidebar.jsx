"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { BiSolidExit } from "react-icons/bi";
import {
  MdOutlineSpaceDashboard,
  MdOutlineCategory,
  MdOutlineFastfood,
  MdPersonOutline,
} from "react-icons/md";
import Swal from "sweetalert2";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout } from "@/component/store/slices/auth-slice";
import secureLocalStorage from "react-secure-storage";

const menus = [
  { name: "Dashboard", link: "/admin", icon: MdOutlineSpaceDashboard },
  { name: "Kategoriler", link: "/admin/categories", icon: MdOutlineCategory },
  { name: "Ürünler", link: "/admin/products", icon: MdOutlineFastfood },
  { name: "Personel", link: "/admin/personal", icon: MdPersonOutline },
];

const Sidebar = () => {
  const [openSide, setOpenSide] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to Logout?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#808080",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Loged Out!", "", "success");
        dispatch(logout());
        secureLocalStorage.removeItem("token");
        router.replace("/");
      }
    });
  };

  return (
    <>
      <div className="md:hidden z-50 bg-gray-700 fixed w-full h-14 ">
        {openMenu ? (
          <FiMenu
            size={26}
            className="cursor-pointer m-3 ml-12 text-gray-100"
            onClick={() => setOpenMenu(!openMenu)}
          />
        ) : (
          <CgClose
            size={26}
            className="cursor-pointer m-3 ml-12 text-gray-100"
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}

        <div
          className={`${
            openMenu ? "hidden" : ""
          } bg-gray-800 w-60 h-96 rounded-br-xl`}
        >
          <ul className=" mt-4 pt-8 flex flex-col gap-1 relative text-gray-100">
            {menus.map(
              (menu, index) => (
                (
                  <Link
                    key={index}
                    href={menu.link}
                    className={`p-3 hover:bg-gray-700 hover:rounded-lg flex items-center gap-2 ${
                      !openMenu && "mx-2 "
                    } ${
                      router.asPath === menu.link
                        ? "bg-gray-700 rounded-lg"
                        : ""
                    }`}
                  >
                    <div>{React.createElement(menu?.icon, { size: "24" })}</div>
                    <li className={` text-lg whitespace-pre duration-500`}>
                      {menu?.name}
                    </li>
                  </Link>
                )
              )
            )}
          </ul>
        </div>
      </div>
      <div
        className={`${
          openSide ? " md:w-60" : " md:w-24"
        } bg-gray-800 text-gray-200 p-2 md:h-screen transition-all shadow hidden md:inline-block`}
      >
        <div
          className={`flex border-b border-gray-500 ${
            openSide ? "justify-end" : "justify-center "
          }`}
        >
          {openSide ? (
            <AiOutlineMenuFold
              size={25}
              className="cursor-pointer m-3 "
              onClick={() => setOpenSide(!openSide)}
            />
          ) : (
            <AiOutlineMenuUnfold
              size={25}
              className="cursor-pointer m-3 "
              onClick={() => setOpenSide(!openSide)}
            />
          )}
        </div>
        <ul className="mt-4 flex flex-col relative">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className={`p-3 hover:bg-gray-700 hover:rounded-lg flex items-center gap-4 ${
                !openSide && "justify-center py-5"
              }`}
            >
              <div>
                {React.createElement(menu?.icon, {
                  size: !openSide ? "24" : "20",
                })}
              </div>
              <li
                className={`${
                  !openSide && "hidden"
                } text-md whitespace-pre duration-500`}
              >
                {menu?.name}
              </li>
            </Link>
          ))}
          <Button
            href="#"
            className={`p-5  hover:bg-red-700 hover:rounded-lg flex items-center gap-4 ${
              !openSide && "justify-center p-5"
            }`}
            onClick={handleLogout}
          >
            <BiSolidExit size={!openSide ? "24" : "20"} />
            <li
              className={`${
                !openSide && "hidden"
              } text-md whitespace-pre duration-500`}
            >
              Çıkış
            </li>
          </Button>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
