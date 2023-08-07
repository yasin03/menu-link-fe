import React from "react";

const HeadSection = ({ title }) => {
  return (
    <div
      className="h-60 px-8 md:px-12 lg:px-24 flex items-center shadow"
    >
      <div className="text-4xl font-bold text-gray-800">{title}</div>
    </div>
  );
};

export default HeadSection;
