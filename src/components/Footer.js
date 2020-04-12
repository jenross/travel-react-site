import React from "react";
import Column from "./Column";
import logogreensm from "./../images/logo-green-small-1x.png";
import logogreensm2 from "./../images/logo-green-small-2x.png";
import logogreen from "./../images/logo-green-1x.png";
import logogreen2 from "./../images/logo-green-2x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${logogreensm} 1x, ${logogreensm2} 2x`}
            media="(max-width: 37.5em)"
          />
          <img
            srcSet={`${logogreen} 1x, ${logogreensm2} 2x`}
            alt="Full logo"
            src={logogreen2}
          />
        </picture>
      </div>
      <div className="row">
        <Column size="2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </Column>
        <Column size="2">
          <p className="footer__copyright">
            Built by{" "}
            <a
              href="https://jenniferross.tech/"
              target="_blank"
              className="footer__link"
            >
              Jennifer Ross
            </a>{" "}
            &amp; Designed by{" "}
            <a
              href="https://www.udemy.com/user/jonasschmedtmann/"
              target="_blank"
              className="footer__link"
            >
              Jonas Schmedtmann
            </a>{" "}
          </p>
        </Column>
      </div>
    </footer>
  );
};

export default Footer;
