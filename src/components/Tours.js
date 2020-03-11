import React from "react";
import LargeCard from "./LargeCard";

const Tours = () => {
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>

      <div className="row">
        <LargeCard
          num="1"
          heading="The Sea Explorer"
          description={[
            "3 day tours",
            "Up to 30 people",
            "2 tour guides",
            "Sleep in cozy hotels",
            "Difficulty: easy"
          ]}
          price="$297"
        />

        <LargeCard
          num="2"
          heading="The Forest Hiker"
          description={[
            "7 day tours",
            "Up to 40 people",
            "5 tour guides",
            "Sleep in provided tents",
            "Difficulty: medium"
          ]}
          price="$497"
        />

        <LargeCard
          num="3"
          heading="The Snow Adventurer"
          description={[
            "5 day tours",
            "Up to 15 people",
            "3 tour guides",
            "Sleep in igloos",
            "Difficulty: hard"
          ]}
          price="$897"
        />
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--green">
          Discover all tours
        </a>
      </div>
    </section>
  );
};

export default Tours;
