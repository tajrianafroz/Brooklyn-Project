import React from "react";
import Heading from "./utils/Heading";
import Paragraph from "./utils/Paragraph";
import Button from "./utils/Button";
import { FaArrowRightLong } from "react-icons/fa6";

const WorkTogether = () => {
  return (
    <section id="together" className="py-12 lg:py-[100px] bg-gray-900">
      <div className="container">
        <div className="content w-full lg:max-w-[50%] mx-auto text-center">
          <Heading className="text-gray-white">
            Do you have Project Idia? Let's discuss your project!
          </Heading>
          <Paragraph className="text-gray-300 py-4 lg:py-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </Paragraph>
        </div>
        <div className="togetherBtn text-center">
          <Button className="inline-flex items-center justify-center hover:text-white hover:outline-white text-sm lg:text-[16px]">
            Let’s work Together <FaArrowRightLong className="ms-3"/>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkTogether;
