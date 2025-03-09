import React from "react";
import {
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa6";
import Heading from "./utils/Heading";
import Paragraph from "./utils/Paragraph";
import Button from "./utils/Button";
import { LuDownload } from "react-icons/lu";

const Profile = () => {
  const socialLinks = [
    {
      id: 1,
      url: "#",
      icon: <FaFacebookF />,
    },
    {
      id: 2,
      url: "#",
      icon: <FaDribbble />,
    },
    {
      id: 3,
      url: "#",
      icon: <FaInstagram />,
    },
    {
      id: 4,
      url: "#",
      icon: <FaLinkedinIn />,
    },
    {
      id: 5,
      url: "#",
      icon: <FaBehance />,
    },
  ];

  return (
    <section id="profile" className="mt-10 lg:mt-[212px] lg:translate-y-[108px]">
      <div className="container">
        <div className="profileShadow rounded-2xl p-4 lg:p-28 bg-gray-white grid lg:grid-cols-2 gap-16 lg:gap-[136px] items-center">
          <div className="profileImage relative">
            <img
              src="/public/images/profile.png"
              className="w-[90%] mx-auto lg:w-full"
              alt=""
            />
            <div className="flex w-full max-w-[264px] small-socialShadow lg:socialShadow bg-gray-white justify-center items-center p-3 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm">
              {socialLinks.map((link) => (
                <a
                  className="w-12 h-12 rounded-sm text-primary-500 grid place-items-center font-medium text-lg hover:bg-primary-500 hover:text-gray-white transition-colors duration-200"
                  key={link.id}
                  href={link.url}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="profileContent">
            <Heading>I am Professional User Experience Designer</Heading>
            <Paragraph className="mt-5 lg:mt-8 mb-3 lg:mb-4">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </Paragraph>
            <Paragraph className="mb-6 lg:mb-8">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </Paragraph>
            <div className="flex gap-4">
              <Button>My Project</Button>
              <Button className="!flex items-center gap-3 bg-transparent text-primary-500 outline-2 outline-primary-500">
                <LuDownload />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
