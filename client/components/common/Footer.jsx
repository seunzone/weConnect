import React from "react";
import { link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mastfoot" align="center">
      <div className="inner">
        <p className="copyright footer-logo">
          <i className="fa fa-copyright" /> 2018 Andela Bootcamp. Developed with
          <i className="fa fa-heart text-info" />&nbsp; by
          <a href="https://github.com/seunzone">
            <strong>Seun</strong>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
