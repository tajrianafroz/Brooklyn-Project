import React from 'react';
import Heading from './utils/Heading';
import Paragraph from './utils/Paragraph';

const Clients = () => {
    return (
      <section id="happyClients" className="py-[40px] lg:py-[100px]">
        <div className="container">
          <div className="clientsHeading text-center pb-3 lg:pb-6 w-full lg:max-w-[45%] mx-auto">
            <Heading>Happy Clients</Heading>
            <Paragraph className="!text-gray-400 pt-3 lg:pt-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </Paragraph>
          </div>
        </div>
      </section>
    );
};

export default Clients;