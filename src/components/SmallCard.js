import React from "react";
import Column from "./Column";
import PropTypes from "prop-types";

export default function SmallCard({ theme, heading, description }) {
  return (
    <Column size="4">
      <div className="feature-box">
        <i className={`feature-box__icon icon-basic-${theme}`}></i>
        <h3 className="heading-tertiary u-margin-bottom-small">{heading}</h3>
        <p className="feature-box__text">{description}</p>
      </div>
    </Column>
  );
}

SmallCard.propTypes = {
  theme: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
