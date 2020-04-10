import React from "react";
import PropTypes from "prop-types";

export default function HeadingTertiary({ text }) {
  return (
    <h3 className="heading-tertiary u-margin-bottom-small">
      {text}
    </h3>
  );
}

HeadingTertiary.propTypes = {
  text: PropTypes.string.isRequired,
};
