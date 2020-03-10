import React from "react";
import PropTypes from "prop-types";

export default function LargeCard({
  pic,
  span,
  heading,
  details_days,
  details_people,
  details_guides,
  details_lodging,
  details_difficulty,
  price
}) {

  return (
    <div className="col-1-of-3">
    <div className="card">
      <div className="card__side card__side--front">
        <div className="card__picture card__picture--{pic}">&nbsp;</div>
        <h4 className="card__heading">
          <span className="card__heading-span card__heading-span--{span}">
            {heading}
          </span>
        </h4>
        <div className="card__details">
          <ul>
            <li>{details_days}</li>
            <li>{details_people}</li>
            <li>{details_guides}</li>
            <li>{details_lodging}</li>
            <li>{details_difficulty}</li>
          </ul>
        </div>
      </div>
      <div className="card__side card__side--back card__side--back-1">
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
  heading: PropTypes.string.isRequired,
  details_days: PropTypes.string.isRequired,
  details_people: PropTypes.string.isRequired,
  details_guides: PropTypes.string.isRequired,
  details_lodging: PropTypes.string.isRequired, 
  details_difficulty: PropTypes.string.isRequired, 
  price: PropTypes.string.isRequired
};
