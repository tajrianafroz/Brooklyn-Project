import React from "react";
import PortfolioCards from "./utils/PortfolioCards";
import Heading from './utils/Heading';
import Paragraph from './utils/Paragraph';
import Button from './utils/Button';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "Product Admin Dashboard",
      detail:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      category: "UI-UX DESIGN",
      image: "/public/images/portfolioCard_1.png",
      url: "#",
    },
    {
      id: 2,
      title: "Product Admin Dashboard",
      detail:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      category: "UI-UX DESIGN",
      image: "/public/images/portfolioCard_2.png",
      url: "#",
    },
    {
      id: 3,
      title: "Product Admin Dashboard",
      detail:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      category: "UI-UX DESIGN",
      image: "/public/images/portfolioCard_3.png",
      url: "#",
    },
    {
      id: 4,
      title: "Product Admin Dashboard",
      detail:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      category: "UI-UX DESIGN",
      image: "/public/images/portfolioCard_4.png",
      url: "#",
    },
    {
      id: 5,
      title: "Product Admin Dashboard",
      detail:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      category: "UI-UX DESIGN",
      image: "/public/images/portfolioCard_5.png",
      url: "#",
    },
    {
      id: 6,
      title: "Product Admin Dashboard",
      detail:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      category: "UI-UX DESIGN",
      image: "/public/images/portfolioCard_6.png",
      url: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-12 lg:py-[100px]">
      <div className="container">
        <div className="portfolioContent text-center pb-9 lg:pb-[70px] w-full lg:max-w-[45%] mx-auto">
          <Heading>Portfolio</Heading>
          <Paragraph className="!text-gray-400 pt-3 lg:pt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </Paragraph>
        </div>
        <div className="portfolioCards grid lg:grid-cols-3 gap-3.5 lg:gap-6">
          {portfolios.map((box) => (
            <PortfolioCards key={box.id} portfolio={box} />
          ))}
        </div>
        <div className="portfolioBtn text-center mt-5 lg:mt-11">
          <Button>More Project</Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
