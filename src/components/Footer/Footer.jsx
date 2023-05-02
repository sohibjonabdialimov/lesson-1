import React from "react";
import logo1 from '../../assets/img/logo-1.svg';
import social1 from '../../assets/img/social-1.png';
import soc2 from '../../assets/img/social-2.svg';
import soc3 from '../../assets/img/social-3.svg';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__content row">
          <div className="site-footer__desc row">
            <div className="footer-header">
              <img src={logo1} alt="logo-img" />
              <div className="site-footer__navbar">
                <ul className="row">
                  <li>
                    <a href="index.html">home</a>
                  </li>
                  <li>
                    <a href="about.html">about</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="location">
              <p>
                987 Hillcrest Lane <br /> Irvine, CA <br /> California 92714{" "}
                <br /> Call Us : 949-833-7432
              </p>
              <p>Copyright 2022. All Rights Reserved</p>
            </div>
          </div>
          <div className="site-footer__social">
            <ul className="row">
              <li>
                <a href="#">
                  <img src={social1} alt="social" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={soc2} alt="social" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={soc3} alt="social" />
                </a>
              </li>
            </ul>
            <p>Copyright 2022. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
