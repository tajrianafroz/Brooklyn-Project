import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const WorkProcessCard = ({ icon, title }) => {
  return (
    <div className="lg:p-8 bg-gray-white rounded-xl workCardShadow">
      <img src={icon} alt="" className="max-w-[72px] max-h-[72px]" />
      <Heading className="!text-xl leading-[120%] pt-8 pb-3">{title}</Heading>
      <Paragraph className="!text-[16px] leading-[150%] text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
        arcu.
      </Paragraph>
    </div>
  );
};

export default WorkProcessCard;
