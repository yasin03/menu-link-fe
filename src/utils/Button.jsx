import React from "react";

const Button = ({ title, icon }) => {
  return (
    <button className="bg-rose-600 text-gray-100 py-2 px-6 rounded md: ml-8 hover:bg-rose-700">
      {title}
    </button>
  );
};

export default Button;
