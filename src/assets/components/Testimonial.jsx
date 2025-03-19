import React from "react";
import Heading from "./utils/Heading";
import Paragraph from "./utils/Paragraph";
import TestimonialBox from "./utils/TestimonialBox";
import { Swiper, SwiperSlide } from "swiper/react";
// Required Modules
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section id="testimonial" className="pb-11 lg:pb-[100px]">
      <div className="container">
        <div className="testimonialContent text-center pb-9 lg:pb-[70px] w-full lg:max-w-[45%] mx-auto">
          <Heading>Testimonial</Heading>
          <Paragraph className="!text-gray-400 pt-3 lg:pt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </Paragraph>
        </div>
        <div className="testimonialBox">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
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
              },
              450: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <TestimonialBox
                content="“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
Morbi ornare elit at libero suscipit porta.”"
                name="Esther Howard"
                company="Managing Director, ABC company"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox
                content="“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
Morbi ornare elit at libero suscipit porta.”"
                name="Esther Howard"
                company="Managing Director, ABC company"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialBox
                content="“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
Morbi ornare elit at libero suscipit porta.”"
                name="Esther Howard"
                company="Managing Director, ABC company"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
