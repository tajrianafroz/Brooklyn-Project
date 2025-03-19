import React from 'react';

const TestimonialBox = ({ content, name, company}) => {
  return (
    <div className="pb-[30px] lg:pb-[50px] text-center w-full lg:max-w-[70%] mx-auto">
      <h3 className="font-medium lg:text-lg leading-[133%] text-gray-800">
        {content}
      </h3>
      <h4 className="font-medium lg:text-lg leading-[144%] text-[#000] pt-3 lg:pt-6 pb-1 lg:pb-2">
        {name}
      </h4>
      <p className="font-light text-sm lg:text-[16px] leading-[150%] text-[#000]">
        {company}
      </p>
    </div>
  );
};

export default TestimonialBox;