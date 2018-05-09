import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-custom">
    <Link to='/' className="navbar-brand" href="#">
      <img
        src="../../public/images/logo.png"
        className="navbar-logo-img mr-2"
        alt=""
      />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto" >
      <li className="nav-item">
          <Link to="signin" className="nav-link btn-primary text-white">
            <i className="fa fa-sign-in" aria-hidden="true"></i> Sign In
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
