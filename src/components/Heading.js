import React from "react";
import PropTypes from "prop-types";

export default function Heading({ text }) {
  return <h2 className="heading-secondary">{text}</h2>;
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};
