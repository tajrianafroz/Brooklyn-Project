import React from "react";

const Button = ({ children, url = "#", className }) => {
  return (
    <a
      href={url}
      className={`inline-block font-semibold text-gray-white leading-[150%] bg-primary-500 rounded-sm px-4 lg:px-6 py-2.5 lg:py-3 hover:bg-transparent hover:text-primary-500 hover:outline-2 outline-primary-500 ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
