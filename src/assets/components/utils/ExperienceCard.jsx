import React from "react";
import CountUp from "react-countup";

const ExperienceCard = ({counter, suffix, title}) => {
  return (
    <div className="py-[17px] bg-primary-100 text-center experienceShadow">
      <CountUp
        end={counter}
        duration={3.75}
        suffix={suffix}
        className="font-semibold text-[28px] lg:text-[32px] leading-[125%] text-gray-700"
      />
      <p className="pt-2 leading-[150%] text-gray-500">{title}</p>
    </div>
  );
};

export default ExperienceCard;
