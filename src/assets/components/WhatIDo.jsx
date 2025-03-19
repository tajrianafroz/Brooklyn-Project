import React from "react";
import Heading from "./utils/Heading";
import Paragraph from "./utils/Paragraph";
import Button from "./utils/Button";
import WhatDoCards from './utils/WhatDoCards';

const WhatIDo = () => {
  return (
    <section id="whatIDo" className="bg-gray-50 py-12 lg:py-[150px]">
      <div className="container grid lg:grid-cols-2 items-center gap-7 lg:gap-[143px]">
        <div className="whatContent">
          <Heading className="text-[#333]">What I do?</Heading>
          <Paragraph className="pt-3 lg:pt-6 pb-2 lg:pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
            eget lorem ac vestibulum. Suspendis imperdiet,
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu, varius eget velit non.
          </Paragraph>
          <Button className="mt-5 lg:mt-[50px]">Say Hello!</Button>
        </div>
        <div className="whatCards grid gap-6">
          <WhatDoCards title={"User Experience (UX)"} />
          <WhatDoCards title={"User Interface (UI)"} />
          <WhatDoCards title={"Web Development"} />
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
