import React from "react";
import PropTypes from "prop-types";
import HeadingTertiary from "./HeadingTertiary";

export default function Story({ img, caption, heading, text }) {
  return (
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src={`${img}`} alt="Person on a tour" className="story__img" />
          <figcaption className="story__caption">{caption}</figcaption>
        </figure>
        <div className="story__text">
          <HeadingTertiary text={`${heading}`} />

          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

Story.propTypes = {
  img: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
