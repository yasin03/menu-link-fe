import React from "react";

const IconTitle = ({ title, desc, icon, isDark }) => {
  return (
    <div className={`flex gap-4 items-center `}>
      <div className="flex justify-center items-center bg-rose-300 rounded-full p-2 md:p-4 ">
        {React.createElement(icon, { size: "20" })}
      </div>
      <div className={`flex flex-col gap-1`}>
        <div className={`font-bold text-lg ${isDark ? "text-gray-100" : ""}`}>
          {title}
        </div>
        <div
          className={`text-md  ${isDark ? "text-gray-100" : "text-gray-700"}`}
        >
          {desc}
        </div>
      </div>
    </div>
  );
};

export default IconTitle;
