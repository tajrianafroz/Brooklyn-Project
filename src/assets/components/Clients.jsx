import React from "react";
import Heading from "./utils/Heading";
import Paragraph from "./utils/Paragraph";
import { Swiper, SwiperSlide } from "swiper/react";
// Required Modules
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Clients = () => {
  const sources = [
    {
      id: 1,
      url: "#",
      src: "/public/images/google.png",
    },
    {
      id: 2,
      url: "#",
      src: "/public/images/dribbble.png",
    },
    {
      id: 3,
      url: "#",
      src: "/public/images/linkedin.png",
    },
    {
      id: 4,
      url: "#",
      src: "/public/images/amazon.png",
    },
    {
      id: 5,
      url: "#",
      src: "/public/images/medium.png",
    },
    {
      id: 6,
      url: "#",
      src: "/public/images/spotify.png",
    },
    {
      id: 3,
      url: "#",
      src: "/public/images/linkedin.png",
    },

  ];

  return (
    <section id="happyClients" className="py-[40px] lg:py-[100px]">
      <div className="container">
        <div className="clientsHeading text-center pb-3 lg:pb-6 w-full lg:max-w-[45%] mx-auto">
          <Heading>Happy Clients</Heading>
          <Paragraph className="!text-gray-400 pt-3 lg:pt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </Paragraph>
        </div>
        <div className="clientSources">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={6}
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
                slidesPerView: 2,
                spaceBetween: 6,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 6,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 8,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 9,
              },
            }}
          >
            {sources.map((source) => (
              <SwiperSlide key={source.id}>
                <a href={source.url}>
                  <img src={source.src} alt="" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;
