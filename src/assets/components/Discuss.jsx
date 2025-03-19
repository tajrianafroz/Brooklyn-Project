import React from 'react';
import Heading from './utils/Heading';
import Paragraph from './utils/Paragraph';

const Discuss = () => {
    return (
      <section
        id="discuss"
        className="mt-10 lg:translate-y-[70px]"
      >
        <div className="container">
          <div className="discuss-Shadow rounded-[15px] p-4 lg:p-22 bg-gray-white grid lg:grid-cols-2 gap-12 lg:gap-[103px] items-center">
            <div className="discussContent pb-4 lg:pb-9">
              <Heading className="!text-[38px] leading-[132%]">
                Let’s discuss your Project
              </Heading>
              <Paragraph className="!text-gray-400 pt-2 lg:pt-4">
                There are many variations of passages of Lorem Ipsu available.
                but the majority have suffered alte.
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Discuss;