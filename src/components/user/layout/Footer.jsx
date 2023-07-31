import React from "react";
import links from "./navlinks.json";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="w-full h-96 bg-gray-50 shadow-inner text-gray-700 flex flex-col justify-between">
      <div className="flex flex-wrap px-8 md:px-12 lg:px-24 py-4 justify-between">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-rose-600">Logo</h2>
          <p className="mt-6 italic">
            MenuFuze ile <br />
            satışlarınız artsın, <br />
            iş yükünüz azalsın!
          </p>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-rose-600">Kurumsal</h2>
          <ul className="flex flex-col gap-4 my-6 font-semibold">
            {links.map((link, i) => (
              <li key={i} className=" hover:text-gray-500">
                <Link href={link.link}>{link?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-rose-600">Çözümlerimiz</h2>
          <p className="mt-6 italic">
            MenuFuze ile <br />
            satışlarınız artsın, <br />
            iş yükünüz azalsın!
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-rose-600">İletişim</h2>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+905554692447"
              className="flex items-center gap-3 hover:text-rose-600"
            >
              <BsFillTelephoneFill size={16} />
              <span className="">+905554692447</span>
            </a>
            <a
              href="mailto:menufuze@gmail.com"
              className="flex items-center gap-3 hover:text-rose-600"
            >
              <MdEmail size={16} />
              <span className="">menufuze@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-gray-100 text-center py-2">
        All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
