import React from "react";
import Button from "./utils/Button";
import ExperienceCard from "./utils/ExperienceCard";

const Banner = () => {
  return (
    <section id="banner" className="mt-5 lg:mt-[126px]">
      <div className="container grid lg:grid-cols-2 items-center">
        <div className="bannerContent order-last lg:order-first mt-10 lg:mt-0">
          <h2 className="text-3xl lg:text-7xl font-semibold leading-[117%] text-gray-900">
            Hello, I’m Brooklyn Gilbert
          </h2>
          <p className="lg:text-lg leading-[133%] text-gray-600 py-6">
            I'm a Freelance{" "}
            <span className="text-gray-900">UI/UX Designer</span> and{" "}
            <span className="text-gray-900">Developer</span> based in London,
            England. I strives to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </p>
          <Button>Say Hello!</Button>
          <div className="experienceCard grid lg:grid-cols-3 gap-2 lg:gap-1 mt-7 lg:mt-[142px]">
            <ExperienceCard counter={15} suffix={" Y."} title={"Experience"} />
            <ExperienceCard
              counter={250}
              suffix={"+"}
              title={"Project Completed"}
            />
            <ExperienceCard counter={58} title={"Happy Client"} />
          </div>
        </div>
        <div className="bannerImage order-first lg:order-last">
          <img
            src="/public/images/banner.png"
            className="max-w-3/4 lg:max-w-full mx-auto lg:ms-auto lg:bannerImageShadow lg:bg-gray-white lg:rounded-[25px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
