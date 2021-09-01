import React from "react";

Footer.propTypes = {};

function Footer(props) {
  return (
    <>
      <footer className="footer section">
        <div className="footer__container bd-container bd-grid">
          <div className="footer__content">
            <h3 className="footer__title">
              <a href="#" className="footer__logo">
                CSS Tutorial
              </a>
            </h3>
            <p className="footer__description">
              Learning, share CSS free <br />
              courses
            </p>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Our Services</h3>
            <ul>
              <li>
                <a href="#" className="footer__link">
                  Pricing{" "}
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Discounts
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Shipping mode
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Our Company</h3>
            <ul>
              <li>
                <a href="#" className="footer__link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Our mision
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__content">
            <h3 className="footer__title">Social</h3>
            <a href="#" className="footer__social">
              <i className="bx bxl-facebook-circle"></i>
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#" className="footer__social">
              <i className="bx bxl-instagram-alt"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; 2021 CSS TUTORIAL</p>
      </footer>
    </>
  );
}

export default Footer;
