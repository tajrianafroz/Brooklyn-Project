import React from 'react';

const Paragraph = ({children, className}) => {
    return (
      <p className={`lg:text-lg leading-[133%] text-gray-600 ${className}`}>{children}</p>
    );
};

export default Paragraph;