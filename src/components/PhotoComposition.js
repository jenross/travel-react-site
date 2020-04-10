import React from "react";
import PropTypes from "prop-types";

export default function PhotoComposition({ img, imglg, num, alt }) {
  return (
    <img
      srcSet={`${img} 300w, ${imglg} 1000w`}
      sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
      alt={`${alt}`}
      className={`composition__photo composition__photo--${num}`}
      src={imglg}
    />
  );
}

PhotoComposition.propTypes = {
  img: PropTypes.string.isRequired,
  imglg: PropTypes.string.isRequired,
  num: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
