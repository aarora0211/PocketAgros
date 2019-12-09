import React from "react";
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from "./assets/logo.PNG";
import './style.css';

class NavMenu extends React.Component {
  render() {
    return (
      <header>
        <nav className="row-navbar">
          <div>
            <a href="index.html" aria-live="assertive">
              <Link to={ROUTES.HOME}><img id="nav-logo" src={logo} alt="Pocket-Agro Logo" /></Link>
            </a>
          </div>
          <div className="col-navbar">
            <div className="top">
              <Link to={ROUTES.LOGIN} id="log-in" aria-live="assertive">Log In</Link>
              <Link to={ROUTES.SIGNUP} id="sign-up" aria-live="assertive">Sign Up</Link>
            </div>
            <div className="bottom">
              <Link to={ROUTES.HOME}>HOME</Link>
              <Link to={ROUTES.ABOUTUS}>ABOUT US</Link>
              <HashLink smooth to="../AboutUs/aboutus#faq">FAQs</HashLink>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default NavMenu;
