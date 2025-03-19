import React from 'react';
import Heading from './Heading';
import Paragraph from './Paragraph';

const WhatDoCards = ({title}) => {
    return (
      <div className="bg-gray-white rounded-md p-5 lg:p-8 hover:whatCardShadow">
        <Heading className="!text-[20px] lg:text-[24px] leading-[100%]">
          {title}
        </Heading>
        <Paragraph className="!font-poppins lg:text-[16px] leading-[150%] text-gray-700 pt-2.5 lg:pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
          eget lorem ac vestibulum.
        </Paragraph>
      </div>
    );
};

export default WhatDoCards;