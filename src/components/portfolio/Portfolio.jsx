import React from "react";
import "./portfolio.css";
import Portfolios from "./Portfolios";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Recent Work</span>

      <Portfolios />
    </section>
  )
}

export default Portfolio;
