import React from "react";

const BlogCards = ({ blog: { title, date, comment, image, url } }) => {
  return (
    <div className="mb-3 lg:mb-6 border border-gray-50 rounded-lg overflow-hidden">
      <a href={url} className="w-full block">
        <img className="w-full block" src={image} alt="" />
      </a>
      <div className="p-2.5 lg:p-6">
        <p className="text-sm leading-[143%] text-gray-400 pb-1 lg:pb-2">
          {date} / {comment} Comments
        </p>
        <a
          className="inline-block lg:text-lg font-medium text-[#333] leading-[133%]"
          href={url}
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default BlogCards;
