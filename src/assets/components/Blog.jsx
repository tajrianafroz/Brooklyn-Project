import React from "react";
import Heading from "./utils/Heading";
import Paragraph from "./utils/Paragraph";
import BlogCards from "./utils/BlogCards";
import { Swiper, SwiperSlide } from "swiper/react";
// Required Modules
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      date: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/blogCard_1.png",
      url: "#",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      date: "26 Oct, 2020",
      comment: 246,
      image: "/public/images/blogCard_2.png",
      url: "#",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      date: "20 July, 2020",
      comment: 226,
      image: "/public/images/blogCard_3.png",
      url: "#",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      date: "22 Oct, 2020",
      comment: 258,
      image: "/public/images/blogCard_4.png",
      url: "#",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      date: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/blogCard_1.png",
      url: "#",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit consea. Nulla purus arcu",
      date: "22 Oct, 2020",
      comment: 246,
      image: "/public/images/blogCard_3.png",
      url: "#",
    },
  ];

  return (
    <section id="blog" className="py-12 lg:py-[100px]">
      <div className="container">
        <div className="blogContent pb-7 lg:pb-[70px] text-center w-full lg:max-w-[45%] mx-auto">
          <Heading className="pb-3 lg:pb-6">Blog</Heading>
          <Paragraph>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </Paragraph>
        </div>
        <div className="blogCards">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              enabled: true,
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 12,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {blogs.map((box) => (
              <SwiperSlide key={box.id}>
                <BlogCards blog={box} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Blog;
