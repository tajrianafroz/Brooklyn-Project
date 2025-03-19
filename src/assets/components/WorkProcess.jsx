import React from "react";
import Heading from "./utils/Heading";
import Paragraph from "./utils/Paragraph";
import WorkProcessCard from "./utils/WorkProcessCard";
import { LuNotepadText } from "react-icons/lu";
import { GoPencil } from "react-icons/go";
import { IoAnalyticsSharp } from "react-icons/io5";
import { CiLaptop } from "react-icons/ci";

const WorkProcess = () => {
  return (
    <section
      id="workProcess"
      className="bg-gray-50 pt-12 lg:pt-[248px] pb-12 lg:pb-[140px] mt-8 lg:mt-0"
    >
      <div className="container grid lg:grid-cols-2 gap-6 lg:gap-[143px] items-center">
        <div className="workContent">
          <Heading>Work Process</Heading>
          <Paragraph className="pt-3 lg:pt-6 pb-2 lg:pb-4">
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
            <WorkProcessCard icon={<LuNotepadText />} title={"1. Research"} />
            <WorkProcessCard icon={<GoPencil />} title={"2. Design"} />
          </div>
          <div className="lastRow grid gap-6 md:mt-6">
            <WorkProcessCard icon={<IoAnalyticsSharp />} title={"3. Analyze"} />
            <WorkProcessCard icon={<CiLaptop />} title={"4. Launch"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
