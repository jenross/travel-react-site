import React from "react";
import nat1lg from "./../images/nat-1-large.jpg";
import nat2lg from "./../images/nat-2-large.jpg";
import nat3lg from "./../images/nat-3-large.jpg";
import nat1 from "./../images/nat-1.jpg";
import nat2 from "./../images/nat-2.jpg";
import nat3 from "./../images/nat-3.jpg";

const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nulla deserunt voluptatum nam.
          </p>

          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              srcSet={`${nat1} 300w, ${nat1lg} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
              src={nat1lg}
            />

            <img
              srcSet={`${nat2} 300w, ${nat2lg} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
              src={nat2lg}
            />

            <img
              srcSet={`${nat3} 300w, ${nat3lg} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
              src={nat3lg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
