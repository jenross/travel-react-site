import React from "react";
import nat1lg from "./../images/nat-1-large.jpg";
import nat2lg from "./../images/nat-2-large.jpg";
import nat3lg from "./../images/nat-3-large.jpg";
import nat1 from "./../images/nat-1.jpg";
import nat2 from "./../images/nat-2.jpg";
import nat3 from "./../images/nat-3.jpg";
import Heading from "./Heading";
import HeadingTertiary from "./HeadingTertiary";
import PhotoComposition from "./PhotoComposition";

const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <Heading text="Breathtaking hiking tours across the globe" />
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <HeadingTertiary text="You're going to fall in love with nature" />

          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui.
          </p>
          <HeadingTertiary text="Get away for a while" />

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
            <PhotoComposition
              img={`${nat1}`}
              imglg={`${nat1lg}`}
              alt="Photo 1"
              num="p1"
            />
            <PhotoComposition
              img={`${nat2}`}
              imglg={`${nat2lg}`}
              alt="Photo 2"
              num="p2"
            />
            <PhotoComposition
              img={`${nat3}`}
              imglg={`${nat3lg}`}
              alt="Photo 3"
              num="p3"
            />
          </div>
          {/* 
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
