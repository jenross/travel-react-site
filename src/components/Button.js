import React from "react";
import PropTypes from "prop-types";

export default function Button({ link, color, text }) {
  return (
    <a href={`${link}`} className={`btn btn--${color}`}>
      {text}
    </a>
  );
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
