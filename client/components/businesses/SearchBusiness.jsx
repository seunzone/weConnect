import React from "react";

const SearchBusiness = () => {
  return (
    <div className="landing-banner">
      <div className="banner-content">
        <h1 className="banner-title">Search for a Business Today</h1>
        <p>Review your customer experience.</p>

        <div className="select-fields">
          <div className="row">
            <div className="form-group col-md-6">
              <input
                className="form-control"
                placeholder="Enter keyword here"
              />
            </div>
            <div className="form-group col-md-6">
              <select className="form-control">
                <option>Search by</option>
                <option>Category</option>
                <option>Location</option>
              </select>
            </div>
          </div>
          <button className="btn btn-primary">Search Now</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBusiness;
