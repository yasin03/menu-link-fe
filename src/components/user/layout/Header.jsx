import Button from "@/component/utils/Button";
import Link from "next/link";
import React from "react";

const Header = () => {
  const links = [
    { name: "Ana Sayfa", link: "/" },
    { name: "Hakkımızda", link: "/about" },
    { name: "Referanslar", link: "/referances" },
    { name: "İletişim", link: "/contact" },
  ];
  return (
    <div className="px-24 py-4 bg-gray-50 shadow flex">
      <div className="flex-1 flex items-center">Logo</div>
      <div className="shrink flex items-center">
        <ul className="flex gap-5 text-gray-600 ">
          {links.map((link, index) => (
            <li
              key={index}
              className="hover:text-gray-500 w-32 flex justify-center "
            >
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex justify-end">
        <Link href="/login">
          <Button title="Giriş Yap" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
