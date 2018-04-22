import React from "react";
import TopBusiness from "../businesses/TopBusiness";

const Home = props => {
  const divStyle = {
    color: "white"
  };
  return (
    <div>
      <div id="jumbotron" className="jumbotron text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-8" style={divStyle}>
              <br />
              <br />
              <img
                src="../../public/images/icon.png"
                className="jumbotron-logo-img mr-2"
                alt=""
              />

              <h1 className="cover-heading typo" />
              <br />
              <p className="lead">
                <a href="#" className="btn btn-warning btn-lg">
                  View Catalogue
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <div className="card bg-primary text-center card-form">
                <div className="card-body">
                  <h3 className="text-white">Sign Up</h3>
                  <h6 className="font-weight-light text-white">
                    Create an account
                  </h6>
                  <form>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        placeholder="email address"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        placeholder="Password"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        placeholder=" ConfirmPassword"
                      />
                    </div>

                    <button className="btn btn-warning btn-block">
                      <i className="fa fa-user-plus" aria-hidden="true" /> Sign
                      Up
                    </button>
                  </form>
                  <hr />
                  <h6 className="text-white">
                    Forgotten your password?
                    <a className="text-white" href="#">
                      Recover it
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopBusiness />
    </div>
  );
};

export default Home;
