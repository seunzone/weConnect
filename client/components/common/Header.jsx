import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-custom">
    <a className="navbar-brand" href="#">
      <img
        src="../../public/images/logo.png"
        className="navbar-logo-img mr-2"
        alt=""
      />
    </a>
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
      <ul className="navbar-nav mr-auto" />
    </div>
  </nav>
);

export default Header;
