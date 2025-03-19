import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const PortfolioCards = ({
  portfolio: { title, detail, category, image, url },
}) => {
  return (
    <div className="mb-3 lg:mb-6 border border-gray-50 rounded-lg overflow-hidden">
      <a href={url}>
        <img src={image} alt="" />
      </a>
      <div className="p-4 lg:p-8">
        <p className="pb-1 font-medium text-[12px] text-gray-400 leading-[133%]">
          {category}
        </p>
        <a
          href={url}
          className="font-semibold text-lg text-gray-900 leading-[133%]"
        >
          {title}
        </a>
        <p className="pt-2 lg:pt-3 pb-3 lg:pb-5 text-sm text-gray-600 leading-[143%]">
          {detail}
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-3 text-sm lg:text-[16px] font-semibold text-primary-500 leading-[150%] border-2 border-primary-500 rounded-sm py-1.5 lg:py-3 px-3 lg:px-6 hover:bg-primary-500 hover:text-white"
        >
          <span>Case Study</span> <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default PortfolioCards;
