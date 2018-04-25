import React from "react";
import TopBusiness from "../businesses/TopBusiness";
import SignupForm from "../auth/SignupForm";

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

              <h1 className="cover-heading">Welcome To WeConnect </h1>
              <br />
              <p className="lead">
                <a href="#" className="btn btn-warning btn-lg">
                  View Catalogue
                </a>
              </p> 
            </div>
            <SignupForm/>
          </div>
        </div>
      </div>
      <TopBusiness />
    </div>
  );
};

export default Home;
