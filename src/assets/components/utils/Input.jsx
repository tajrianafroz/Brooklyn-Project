import React, { useState } from "react";

const Input = ({ type = "text", name, className, placeholder }) => {

  return (
    <>
      <input
        type={type}
        name={name}
        className={`w-full my-3 py-1 lg:text-lg leading-[133%] text-gray-800 border-b border-gray-100 h-[38px] outline-0 focus:border-primary-500 focus:text-primary-500 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${className}`}
        placeholder={placeholder}

      />
    </>
  );
};

export default Input;
