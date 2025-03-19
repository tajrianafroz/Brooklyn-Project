import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const WorkProcessCard = ({ icon, title }) => {
  return (
    <div className="p-5 lg:p-8 bg-gray-white rounded-xl workCardShadow">
      <span className="inline-block text-xl rounded-md w-full max-w-8 h-full max-h-8 text-primary-500 bg-[#EDD8FF]">
        {icon}
      </span>
      <Heading className="!text-xl leading-[120%] pt-4 lg:pt-8 pb-2 lg:pb-3">
        {title}
      </Heading>
      <Paragraph className="!text-[16px] leading-[150%] text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
        arcu.
      </Paragraph>
    </div>
  );
};

export default WorkProcessCard;
