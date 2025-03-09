import React from "react";
import Heading from "./utils/Heading";
import Paragraph from "./utils/Paragraph";
import WorkProcessCard from "./utils/WorkProcessCard";

const WorkProcess = () => {
  return (
    <section
      id="workProcess"
      className="bg-gray-50 lg:pt-[248px] lg:pb-[140px]"
    >
      <div className="container grid lg:grid-cols-2 lg:gap-[143px] items-center">
        <div className="workContent">
          <Heading className="lg:text-[48px]">Work Process</Heading>
          <Paragraph className="lg:pt-6 lg:pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </Paragraph>
        </div>
        <div className="workCards grid md:grid-cols-2 gap-6 items-center">
          <div className="firstRow grid gap-6">
            <WorkProcessCard
              icon={"/public/images/workCard_1.png"}
              title={"1. Research"}
            />
            <WorkProcessCard
              icon={"/public/images/workCard_2.png"}
              title={"2. Design"}
            />
          </div>
          <div className="lastRow grid gap-6 md:mt-6">
            <WorkProcessCard
              icon={"/public/images/workCard_3.png"}
              title={"3. Analyze"}
            />
            <WorkProcessCard
              icon={"/public/images/workCard_4.png"}
              title={"4. Launch"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
