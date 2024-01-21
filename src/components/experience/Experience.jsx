import React from "react";
import "./experience.css";
import Data from "./Data";
import Card from "./Card";

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="experience__container container grid">
        <div className="experience__timeline">
          {Data.map((val, id) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={id}
                  title={val.title}
                  year={val.year}
                  desc1={val.desc1}
                  desc2={val.desc2}
                  desc3={val.desc3}
                  desc4={val.desc4}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience;
