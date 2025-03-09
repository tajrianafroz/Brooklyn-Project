import React from 'react';

const Button = ({children, url='#', className}) => {
    return (
      <a
        href={url}
        className={`inline-block font-semibold text-gray-white leading-[150%] bg-primary-500 rounded-sm px-6 py-3 ${className}`}
      >
        {children}
      </a>
    );
};

export default Button;