import React, { useState } from "react";
import Button from "./Button";
import Heading from "./Heading";

const Book = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form" onSubmit={handleSubmit}>
              <div className="u-margin-bottom-medium">
                <Heading text="Start booking now" />
              </div>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  required
                />
                <label
                  htmlFor="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form__label"
                >
                  Full name
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="email"
                  required
                />
                <label
                  htmlFor="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form__label"
                >
                  Email address
                </label>
              </div>

              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small tour group
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large tour group
                  </label>
                </div>
              </div>

              <div className="form__group">
                <Button link="#" color="green" text="Next step &rarr;" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
