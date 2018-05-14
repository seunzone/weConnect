import React from "react";

const BusinessCard = () => {
  const Style = {
    height: "250px"
  };
  return (
    <div className="row">
      <div className="card mb-3 col-md-4">
        <div className="img-zoom">
          <img
            className="card-img-top"
            style={Style}
            src="../../public/images/biz1.jpg"
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">
            <a href="#">Lorem Ipsum Dolor</a>
          </h5>
          <br />
          <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
            inventore.
          </h6>
          <hr />
          <p className="text-sm mb-5">
            <small>
              <span className="text-muted">Added by</span> 3 mins ago
            </small>
            <span className="text-muted float-right">
              <i className="fa fa-pencil-square-o text-rose" />
              2
            </span>
          </p>
          <p className="author">
            <i className="fa fa-eye text-rose" />
            <span>50</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
