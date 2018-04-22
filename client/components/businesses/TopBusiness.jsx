import React from "react";
import TopBusinessHeader from "./TopBusinessHeader";

const TopBusiness = () => {
  return (
    <div>
    <TopBusinessHeader/>
    <section className="container home_details">
      <div className="row card-deck">
        <div className="col-md-4">
          <div className="card">
            <div className="view overlay hm-white-slight">
              <img
                className="card-img-top img-zoom img-fluid"
                src="../public/images/biz1.jpg"
              />
            </div>
            <div className="card-body">
              <a href="#">
                <h4 className="card-title">Ventures Park</h4>
                <hr />
              </a>
              <p className="author">
                <i className="fa fa-map-marker" aria-hidden="true" />
                <span>Abuja, Nigeria</span>
              </p>
              <p className="author">
                <i className="fa fa-pencil-square-o text-rose" />
                <span>50 Reviews</span>
              </p>
              <div className="seeButton">
                <a href="feeds.html" className="btn btn-outline-primary">
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default TopBusiness;

