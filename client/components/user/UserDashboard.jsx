import React from "react";
import UserBusinesses from './UserBusinesses';
import { Link } from "react-router-dom";

class UserDashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 text-center">
              <h1 className="text-center header-color"><small>Welcome </small>username</h1>
              <p className="text-center my-4">
                <span className="mr-3 h2 header-color"> 51 </span>
                <span className="h6 mr-3">Businesses Created</span>
                <span className="mr-3 h2 header-color"> 531 </span>
                <span className="h6">Reviews</span>
              </p>
              <Link to="/businesses/add" className="btn btn-info text-white">
                <i className="fa fa-plus-circle" aria-hidden="true"></i> Add New Business
              </Link>
            </div>
          </div>
        </div>
        <UserBusinesses />
      </div>
    );
  }

};

export default UserDashboard;
