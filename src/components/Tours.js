import React from "react";
import LargeCard from "./LargeCard";

const Tours = () => {
  const tourDetails = [
    {
      sea_pic: "1",
      sea_heading: "The Sea Explorer",
      sea_days: "3 day tours",
      sea_people: "Up to 30 people",
      sea_guides: "2 tour guides",
      sea_lodging: "Sleep in cozy hotels",
      sea_difficulty: "Difficulty: easy",
      sea_price: "$297"
    },
    {
      forest_heading: "The Forest Hiker",
      forest_days: "7 day tours",
      forest_people: "Up to 40 people",
      forest_guides: "6 tour guides",
      forest_lodging: "Sleep in provided tents",
      forest_difficulty: "Difficulty: medium",
      forest_price: "$497"
    },
    {
      sea_heading: "The Sea Explorer",
      sea_days: "3 day tours",
      sea_people: "Up to 30 people",
      sea_guides: "2 tour guides",
      sea_lodging: "Sleep in cozy hotels",
      sea_difficulty: "Difficulty: easy",
      sea_price: "$297"
    }
  ];
  return (
    <section className="section-tours" id="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>

      <div className="row">
        <LargeCard
          pic={tourDetails[0].sea_pic}
          heading={tourDetails[0].sea_heading}
          details_days={tourDetails[0].sea_days}
          details_people={tourDetails[0].sea_people}
          details_guides={tourDetails[0].sea_guides}
          details_lodging={tourDetails[0].sea_lodging}
          details_difficulty={tourDetails[0].sea_difficulty}
          price={tourDetails[0].sea_price}
        />

        <LargeCard
          heading={tourDetails[1].forest_heading}
          details_days={tourDetails[1].forest_days}
          details_people={tourDetails[1].forest_people}
          details_guides={tourDetails[1].forest_guides}
          details_lodging={tourDetails[1].forest_lodging}
          details_difficulty={tourDetails[1].forest_difficulty}
          price={tourDetails[1].forest_price}
        />

        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  The Snow Adventurer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>5 day tours</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Difficulty: hard</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$897</p>
                </div>
                <a href="#popup" className="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
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
