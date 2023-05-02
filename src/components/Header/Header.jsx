import React from "react";
import logo1 from '../../assets/img/logo-1.svg';
import line from '../../assets/img/line.png';

const Header = () => {
  return (
    <section className="hero">
      <div className="container">
        <header className="site-header row">
          <div className="header-logo">
            <img src={logo1} alt="logo" />
          </div>
          <div className="header-navbar row">
            <input className="toggle-menu" type="checkbox" />
            <div className="hamburger"></div>
            <ul className="row menu">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a className="btn" href="#">
                  contact us
                </a>
              </li>
            </ul>
          </div>
        </header>
        <header className="header-content">
          <div className="header-desc row">
            <div className="header-desc-title">
              <h1>
                Find the <br /> best <span>talent</span>
              </h1>
            </div>
            <div className="header-desc-right row">
              <img src={line} alt="line" />
              <p>
                Finding the right people and building high performing teams can
                be hard. Most companies aren't tapping into the abundance of
                global talent. We're about to change that.
              </p>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Header;
