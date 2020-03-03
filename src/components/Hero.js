import React from "react";
import logo from "./../images/logo-white.png";

const Hero = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="Logo" className="header__logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Adventure</span>
            <span className="heading-primary--sub">of a lifetime</span>
          </h1>

          <a href="#section-tours" className="btn btn--white btn--animated">
            Discover our tours
          </a>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Hero;
