import React from 'react';

const Heading = ({children, className}) => {
    return (
      <h3
        className={`font-semibold text-[28px] lg:text-[48px] leading-[117%] text-gray-900 ${className}`}
      >
        {children}
      </h3>
    );
};

export default Heading;