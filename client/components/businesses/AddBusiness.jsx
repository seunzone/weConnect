import React from "react";

const AddNewBusiness = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <h1 className="text-center my-5 header-color">
          Add New Business Profile
        </h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-10">
          <div className="card">
            <div className="card-body">
              <div className="form-group row">
                <div className="col-sm-4">
                  <label>Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="lorem ipsum"
                  />
                </div>
                <div className="col-sm-4">
                  <label for="category">Select Category</label>
                  <div className="form-group">
                    <select className="form-control">
                      <option>ICT</option>
                      <option>Oil Firm</option>
                      <option>Corporate Firm</option>
                      <option>Agriculture</option>
                      <option>Entertainment</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-4">
                  <label for="location">Select Location</label>
                  <div className="form-group">
                    <select className="form-control">
                      <option>Abuja</option>
                      <option>Lagos</option>
                      <option>Port Harcort</option>
                      <option>Benin City</option>
                      <option>Ibadan</option>
                    </select>
                  </div>
                </div>
              </div>
              <br />
              <label>Upload Image</label>
              <div className="input-group">
                <span className="input-group-btn">
                  <span className="btn btn-default btn-file">
                    Browse…
                    <input type="file" id="imgInp" />
                  </span>
                </span>
              </div>
              <br />
              <label>Details</label>
              <textarea
                placeholder="Lorem Ipsum Dolor"
                cols="3"
                rows="3"
                class="form-control"
              />
              <hr />
              <div className="text-center">
                <button className="btn btn-primary">
                  <i className="fa fa-plus-circle" aria-hidden="true" /> Add
                  Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewBusiness;
