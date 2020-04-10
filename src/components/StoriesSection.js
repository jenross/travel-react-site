import React from "react";
import bgvideomp4 from "./../images/video.mp4";
import bgvideowebm from "./../images/video.webm";
import nat8 from "./../images/nat-8.jpg";
import nat9 from "./../images/nat-9.jpg";
import Heading from "./Heading";
import HeadingTertiary from "./HeadingTertiary";

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={bgvideomp4} type="video/mp4" />
          <source src={bgvideowebm} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <Heading text="An experience you'll never forget" />
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat8} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <HeadingTertiary text="I had the best week ever with my family" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat9} alt="Person on a tour" className="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <HeadingTertiary text="WOW! This getaway was exactly what I needed" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
