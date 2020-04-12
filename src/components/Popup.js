import React from "react";
import nat8 from "./../images/nat-8.jpg";
import nat9 from "./../images/nat-9.jpg";
import Heading from "./Heading";
import HeadingTertiary from "./HeadingTertiary";
import Button from "./Button";

const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={nat8} alt="Tour photo" className="popup__img" />
          <img src={nat9} alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <Heading text="Start booking now" />

          <HeadingTertiary text="Important &ndash; Please read these terms before booking" />
          <p className="popup__text">
            I'm baby trust fund kogi gluten-free everyday carry lomo narwhal
            occupy. Poutine vaporware everyday carry artisan shoreditch fixie.
            Seitan yr leggings etsy literally tbh. Tbh scenester etsy, hot
            chicken iPhone tote bag edison bulb seitan. Copper mug edison bulb
            wayfarers polaroid chartreuse salvia pickled DIY cold-pressed
            distillery woke taxidermy. Four dollar toast hella you probably
            haven't heard of them +1. Glossier stumptown cronut, chia master
            cleanse kale chips bicycle rights yuccie vegan retro pabst
            williamsburg lo-fi forage. 90's mixtape microdosing jianbing. Edison
            bulb skateboard deep v brooklyn wayfarers pabst. Tumblr chambray
            flexitarian copper mug sriracha, ugh blue bottle taiyaki adaptogen
            snackwave edison bulb cold-pressed vape kale chips vaporware.
          </p>
          <Button link="#" color="green" text="Book now" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
