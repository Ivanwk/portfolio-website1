import React from "react";

const Card = (props) => {
  return (
    <div className="timeline__item">
      <h3 className="timeline__title">{props.title}</h3>
      <span className="timeline__date">{props.year}</span>
      <li className="timeline__text">{props.desc1}</li>
      <li className="timeline__text">{props.desc2}</li>
      <li className="timeline__text">{props.desc3}</li>
      <li className="timeline__text">{props.desc4}</li>
    </div>
  )
}

export default Card;
