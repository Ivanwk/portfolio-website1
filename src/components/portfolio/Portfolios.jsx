import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import PortfolioItems from "./PortfolioItems";

const Portfolios = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        if (project.category1.toLowerCase() === item.name) {
          return project.category1.toLowerCase() === item.name;
        } else {
          return project.category2.toLowerCase() === item.name;
        }
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="portfolio__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${
                active === index ? "active-work" : ""
              } portfolio__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="portfolio__container container grid">
        {projects.map((item) => {
          return <PortfolioItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Portfolios;
