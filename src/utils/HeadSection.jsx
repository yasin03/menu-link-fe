import React from "react";

const HeadSection = ({ title }) => {
  return (
    <div
      className="h-60 px-8 md:px-12 lg:px-24 flex items-center shadow"
      style={{
        backgroundImage:
          "radial-gradient( circle 900px at 8.6% 27.9%,  rgba(185,28,28,0.5) 10%, rgba(250,250,250,0.5) 90% );",
      }}
    >
      <div className="text-4xl font-bold text-gray-800">{title}</div>
    </div>
  );
};

export default HeadSection;
