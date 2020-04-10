import React from "react";
import SmallCard from "./SmallCard";
const Features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <SmallCard
          theme="world"
          heading="Explore the world"
          description="I'm baby twee shabby chic subway tile squid. Man braid church-key portland photo booth trust fund seitan chartreuse."
        />
        <SmallCard
          theme="compass"
          heading="Meet nature"
          description="Portland williamsburg irony meditation aesthetic pug franzen 8-bit. Butcher blue bottle hot chicken church-key green."
        />
        <SmallCard
          theme="map"
          heading="Find your way"
          description="Austin palo santo flexitarian pitchfork raclette kitsch YOLO keytar letterpress banjo fixie affogato knausgaard."
        />
        <SmallCard
          theme="heart"
          heading="Live a healthier life"
          description="Heirloom trust fund offal, organic humblebrag fam roof party venmo artisan tumeric. Banh mi butcher small batch swag."
        />
      </div>
    </section>
  );
};

export default Features;
