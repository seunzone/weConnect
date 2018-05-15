import React from "react";
import Pagination from "../businesses/Pagination";

const UserBusinesses = () => {
  return (
    <div>
      <section className="container text-center">
        <h3>My Businesses</h3>
      </section>
      <section class="container home_details">
        <div className="row card-deck">
          <div className="col-md-3">
            <div className="card">
              <div className="view overlay hm-white-slight">
                <img
                  className="card-img-top img-zoom"
                  src="../../public/images/biz1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="card-body">
                <a href="#">
                  <h4 className="card-title">Ventures Park</h4>
                  <hr />
                </a>
                <p className="author">
                  <i className="fa fa-eye" aria-hidden="true" />
                  <span>20</span>
                </p>
                <p className="author">
                  <i className="fa fa-pencil-square-o text-rose" />
                  <span>50 Reviews</span>
                </p>
                <div className="seeButton">
                  <a href="#" class="btn btn-outline-primary">
                    <i className="fa fa-pencil-square-o" aria-hidden="true" />{" "}
                    Edit
                  </a>&nbsp;
                  <a
                    data-toggle="modal"
                    data-target="#exampleModal"
                    class="btn btn-outline-danger"
                  >
                    <i class="fa fa-trash-o" aria-hidden="true" /> Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination />
      </section>
    </div>
  );
};

export default UserBusinesses;
