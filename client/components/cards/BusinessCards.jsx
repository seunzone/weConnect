import React from "react";
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';


const BusinessCard = ({ name, image, description, category, id }) => {
 
 // console.log('auth state is ' + this.props.auth)
 // const { isAuthenticated } = this.props.auth;
  const Style = { height: "250px" };
  return (
   
      <div className="card mb-3 col-md-4">
        <div className="img-zoom">
          <img
            className="card-img-top"
            style={Style}
            src={image}
            alt="Card image cap"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title text-center">
            <Link to={`/business/view/${id}`}>{name}</Link>
          </h5>
          <br />
          <h6>
          <TextTruncate text={description} lines={2}/>
            </h6>
          <hr />
          <p className="text-sm mb-5">
            <small>
              <span className="text-muted">Category</span> {category}
              </small>
            <span className="text-muted float-right">
              <i className="fa fa-pencil-square-o text-rose" />
              2
              </span>
          </p>
          <Link align="center" className="btn btn-primary" to={`/business/view/${id}`}>View Details</Link>
        </div>
      </div>
  );
};

export default BusinessCard;