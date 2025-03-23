import React, { useState } from "react";

const Footer = () => {

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
        title: "Services",
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
        title: "Contact",
        url: "",
      },
    ];

      const [toggle, setToggle] = useState(false);

  return (
    <section
      id="footer"
      className="bg-gray-800 pt-[10px] lg:pt-[160px] pb-[30px] lg:pb-[50px]"
    >
      <div className="container grid lg:grid-cols-3 items-center">
        <div className="logo my-5 lg:my-0">
          <a href="#">
            <img src="/public/images/footerLogo.png" className="max-w-[40%] lg:max-w-full" alt="" />
          </a>
        </div>
        <div className="hidden lg:block">
          <ul
            className={`${
              !toggle ? "scale-x-0" : ""
            } menuItems origin-center transition-all duration-400 lg:scale-x-100 lg:flex justify-end items-center relative gap-3 bg-gray-white lg:bg-transparent h-full lg:h-auto max-w-3/4 lg:max-w-full p-7 lg:p-0`}
          >
            {menuLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="leading-[150%] text-gray-50 inline-block my-2 lg:my-0"
                  href={link.url}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="copyright text-start lg:text-end py-4 lg:py-0">
          <p className="leading-[150%] text-gray-white text-sm lg:text-[16px]">
            Copyright © 2022 Picto.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
