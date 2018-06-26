import React from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

class Header extends React.Component {
  logout(event) {
    event.preventDefault();
    this.props.logout();
    this.context.router.history.push('/signin');
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const userLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/businesses/add" className="nav-link text-secondary">
            Create Business
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/business" className="nav-link text-secondary">
            See All Businesses
          </Link>
        </li>
        <li className="nav-item mr-3">
          <Link to="/dashboard" className="nav-link btn-primary text-white">
            <i className="fa fa-tachometer" aria-hidden="true" /> My Dashboard
          </Link>
        </li>
        <Link
          className="nav-link text-white btn-danger"
          to="/signin"
          onClick={this.logout.bind(this)}
        >
          <i className="fa fa-sign-in" aria-hidden="true" /> Logout
        </Link>
      </ul>
    );

    const guestLinks = (
      <Link to="signin" className="nav-link btn-primary text-white">
        <i className="fa fa-sign-in" aria-hidden="true" /> Sign In
      </Link>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-custom navbar-light">
        <Link to="/" className="navbar-brand" href="#">
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
          id="toggle-me"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" />
          {isAuthenticated ? userLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

Header.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header);
