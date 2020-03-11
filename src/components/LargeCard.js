import React from "react";
import PropTypes from "prop-types";

export default function LargeCard({ num, heading, description, price }) {
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${num}`}>&nbsp;</div>
          <h4 className="card__heading">
            <span className={`card__heading-span card__heading-span--${num}`}>
              {heading}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              {description &&
                description.map((desc, index) => {
                  return <li key={index}>{desc}</li>;
                })}
            </ul>
          </div>
        </div>
        <div className={`card__side card__side--back card__side--back-${num}`}>
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">{price}</p>
            </div>
            <a href="#popup" className="btn btn--white">
              Book now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

LargeCard.propTypes = {
  num: PropTypes.number.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired
};
