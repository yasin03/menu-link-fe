import React from "react";

const Title = ({ title, desc, isCenter, isDark, className }) => {
  return (
    <div
      className={`${className} flex flex-col gap-4 ${
        isCenter && "text-center"
      } `}
    >
      <div
        className={`font-bold text-4xl tracking-wide  ${
          isDark && "text-gray-100"
        }`}
      >
        {title}
      </div>
      <div
        className={`text-lg overflow  ${
          isDark ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {desc}
      </div>
    </div>
  );
};

export default Title;
