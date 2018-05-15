import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
//action
import { logout } from '../../actions/auth';

class Header extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <div>
        <Link to="/dashboard" className="nav-link btn-info text-white">
        <i class="fa fa-tachometer" aria-hidden="true"></i> My Dashboard
       </Link>&nbsp;
        <a className="nav-link btn-danger text-white" href="#"
          onClick={this.logout.bind(this)}>
          <i className="fa fa-sign-in" aria-hidden="true"></i> Logout</a>
      </div>
    );

    const guestLinks = (
      <Link to="signin" className="nav-link btn-primary text-white">
        <i className="fa fa-sign-in" aria-hidden="true"></i> Sign In
                </Link>
    );
    return (
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

              {isAuthenticated ? userLinks : guestLinks}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(Header);
