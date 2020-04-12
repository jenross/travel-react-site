import React from "react";
import PropTypes from "prop-types";

export default function Column({ size, children }) {
  return <div className={`col-1-of-${size}`}>{children}</div>;
}

Column.propTypes = {
  size: PropTypes.string.isRequired,
};
