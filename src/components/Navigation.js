import React from "react";
import { Link } from "@reach/router";

const Navigation = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link className="navigation__link" to="/">
              <span>01</span>About Natous
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="/">
              <span>02</span>Your benefits
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="/">
              <span>03</span>Popular tours
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="/">
              <span>04</span>Stories
            </Link>
          </li>
          <li className="navigation__item">
            <Link className="navigation__link" to="/">
              <span>05</span>Book now
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
