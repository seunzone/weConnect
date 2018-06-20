import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mastfoot" align="center">
      <div className="inner">
        <p className="copyright footer-logo">
          <i className="fa fa-copyright" /> 2018 Andela Bootcamp. Developed with
          <i className="fa fa-heart text-info" />&nbsp; by
          <Link to="https://seunzone.github.io">
            <strong>Seun</strong>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
