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
            Mixtape taiyaki gluten-free deep v. Cronut quinoa master cleanse
            chambray, mixtape deep v cray stumptown skateboard. Green juice jean
            shorts locavore butcher leggings.
          </p>
          <HeadingTertiary text="Get away for a while" />

          <p className="paragraph">
            Cray vegan brooklyn post-ironic. Drinking vinegar PBR&B raw denim,
            tofu pug bicycle rights shabby chic swag squid flexitarian air
            plant.
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
        </div>
      </div>
    </section>
  );
};

export default About;
