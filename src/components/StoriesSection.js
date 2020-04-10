import React from "react";
import bgvideomp4 from "./../images/video.mp4";
import bgvideowebm from "./../images/video.webm";
import nat8 from "./../images/nat-8.jpg";
import nat9 from "./../images/nat-9.jpg";
import Heading from "./Heading";
import Story from "./Story";

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
      <Story
        img={`${nat8}`}
        caption="Mary Smith"
        heading="I had the best week ever with my family"
        text="Irony shabby chic crucifix, fingerstache direct trade marfa freegan coloring book woke selfies taiyaki everyday carry tattooed. Franzen chia vinyl, etsy hella gentrify photo booth sriracha pinterest."
      />
      <Story
        img={`${nat9}`}
        caption="Jack Wilson"
        heading="WOW! This getaway was exactly what I needed"
        text="Selfies tattooed af, raw denim banjo waistcoat occupy chillwave street art tofu. 90's slow-carb skateboard tumeric cronut kale chips four dollar toast, mustache synth kombucha edison bulb squid forage."
      />
      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
