import React from 'react';

const HomeFooter = () => {
  return (
    <div className="home_footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-info">
            <h3>WeConnect</h3>
            <p>WeConnect provides a platform that brings businesses and individuals together.
            This platform creates awareness for businesses and gives the users the ability
            to write reviews about the
            businesses they have interacted with. This is an Andela Developer Checkpoint App.
            </p>

          </div>

          <div className="col-lg-3 col-md-6 footer-info">
            <h3>Useful Links</h3>
            <ul className="a__link">
              <li> <a href="https://andela.com" target="_blank" rel="noopener noreferrer">About Andela</a></li>
              <li> <a href="https://seunzone.github.io" target="_blank" rel="noopener noreferrer">About Seun</a></li>
              <li> <a href="https://github.com/seunzone/weConnect" target="_blank" rel="noopener noreferrer">Code on <i className="fa fa-github-alt" /> Github </a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-info">
            <h3>Andela Address</h3>
            <p>
                EPIC Towers, <br />
                235 Ikorodu Rd,<br />
                Ilupeju, Lagos <br />
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-info">
            <h3>Web Developer</h3>
            <p>
              <strong><i className="fa fa-mobile" /></strong> +2347031229501<br />
              <strong><i className="fa fa-envelope-o" /></strong> faluyi.seun@andela.com<br />
            </p>
            <div className="social-links">
              <a href="https://twitter.com/seunzone"><i className="fa fa-twitter" /></a>
              <a href="https://www.facebook.com/darealseun"><i className="fa fa-facebook" /></a>
              <a href="https://twitter.com/seunzone"><i className="fa fa-instagram" /></a>
              <a href="https://www.linkedin.com/in/darealseun/"><i className="fa fa-linkedin" /></a>
            </div>
            <img
              src="../../public/images/logo.png"
              className="navbar-logo-img mr-2"
              alt=""
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
