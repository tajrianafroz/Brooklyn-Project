import React from "react";
import { GrLocation } from "react-icons/gr";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";


const DiscussInfoCards = () => {
//   const information = [
//     {
//       id: 1,
//       icon: <GrLocation />,
//       title: "Address:",
//       info: "New Mexico 31134",
//       url: "#",
//     },
//     {
//       id: 2,
//       icon: <MdOutlineAlternateEmail />,
//       title: "My Email:",
//       info: "mymail@mail.com",
//       url: "#",
//     },
//     {
//       id: 3,
//       icon: <IoIosCall />,
//       title: "Call Me Now:",
//       info: "00-1234 00000",
//       url: "#",
//     },
//   ];

  return (
    // <div className="grid grid-cols-3 gap-[13px] bg-gray-white p-3 lg:p-6">
    //   <a
    //     className="inline-block w-[24px] h-[24px] rounded-1 bg-[#EDD8FF] text-primary-500 focus:bg-primary-500 focus:text-gray-white"
    //     href={url}
    //   >
    //     {icon}
    //   </a>
    //   <div className="cardDetail col-span-2">
    //     <p className="text-gray-700 leading-[143%] text-sm">{title}</p>
    //     <h4 className="text-gray-900 leading-[150%] font-medium">{info}</h4>
    //   </div>
    // </div>
    <div className="grid grid-cols-2 rounded-[10px] bg-gray-white p-3 lg:p-6 shadow">
      <div className="cardIcon w-1/3">
        <a
          className="inline-block w-full max-w-[24px] h-full max-h-[24px] rounded-1 bg-[#EDD8FF] text-primary-500 focus:bg-primary-500 focus:text-gray-white"
          href="#"
        >
          <IoIosCall />
        </a>
      </div>
      <div className="cardDetail w-2/3">
        <p className="text-gray-700 leading-[143%] text-sm">Address:</p>
        <h4 className="text-gray-900 leading-[150%] font-medium">
          New Mexico 31134,
        </h4>
      </div>
    </div>
  );
};

export default DiscussInfoCards;
