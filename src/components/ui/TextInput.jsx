"use client";
import React from "react";

const TextInput = ({ props }) => {
  const { lbl, placeholder, type, name } = props;
  return (
    <label class="block">
      <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        {lbl}
      </span>
      <input
        type={type}
        name={name}
        class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextInput;
