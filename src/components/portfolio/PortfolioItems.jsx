import React from "react";

const PortfolioItems = ({ item }) => {
  return (
    <div className="portfolio__card" key={item.id}>
      <a
        href={item.link}
        className="portfolio__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={item.image} alt="" className="portfolio__img" />
      </a>
      <h3 className="portfolio__title">{item.title}</h3>
      <a
        href={item.link}
        className="portfolio__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
      </a>
    </div>
  )
}

export default PortfolioItems;
