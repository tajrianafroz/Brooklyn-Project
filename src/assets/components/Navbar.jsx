import React, { useState } from "react";
import Button from "./utils/Button";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const menuLinks = [
    {
      title: "Home",
      url: "",
    },
    {
      title: "About",
      url: "",
    },
    {
      title: "Process",
      url: "",
    },
    {
      title: "Portfolio",
      url: "",
    },
    {
      title: "Blog",
      url: "",
    },
    {
      title: "Services",
      url: "",
    },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="py-5 bg-gray-white relative z-10">
      <div className="container grid grid-cols-2 lg:grid-cols-3 items-center">
        <div className="logo">
          <a href="#">
            <img src="/public/images/logo.png" className="max-w-full" alt="" />
          </a>
        </div>
        <div
          onClick={() => setToggle(false)}
          className={`menu ${
            !toggle ? "invisible opacity-0" : "visible opacity-100"
          } transition-all duration-300 lg:visible lg:opacity-100 col-span-2 lg:block fixed lg:static inset-0 bg-gray-500/70 lg:bg-transparent`}
        >
          <ul
            className={`${
              !toggle ? "scale-x-0" : ""
            } menuItems origin-left transition-all duration-400 lg:scale-x-100 lg:flex justify-end items-center relative gap-12 bg-gray-white lg:bg-transparent h-full lg:h-auto max-w-3/4 lg:max-w-full p-7 lg:p-0`}
          >
            <button
              onClick={() => setToggle(false)}
              className="closeButton absolute right-[6%] top-[3%] lg:hidden text-xl text-primary-500"
            >
              <RxCross2 />
            </button>
            {menuLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="font-medium leading-[150%] text-[#333] inline-block my-2 lg:my-0"
                  href={link.url}
                >
                  {link.title}
                </a>
              </li>
            ))}
            <li className="mt-3 lg:mt-0">
              <Button url="/contact">Contact</Button>
            </li>
          </ul>
        </div>
        <div className="menuIcon text-end lg:hidden">
          <button className="text-2xl" onClick={() => setToggle(true)}>
            <MdOutlineMenu />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
