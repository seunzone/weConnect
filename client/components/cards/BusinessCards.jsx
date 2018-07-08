import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import TextTruncate from 'react-text-truncate';
import moment from 'moment';
import Buttons from '../businesses/Buttons';


const BusinessCard = ({
  name, image, description, createdAt, category, id, deleteBusiness
}) => {
  const Style = { height: '250px' };
  return (
    <div className="col-md-4">
        <div className="card">
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
            <TextTruncate text={description} lines={2} />
          </h6>
          <hr />
          <p className="text-sm mb-5">
            <small>
              <span className="text-muted">Category</span> {category}
            </small>
            <span className="text-muted float-right">
              Added: &nbsp;
              {moment(createdAt).format('Do MMMM YYYY')}
            </span>
          </p>
          <Link align="center" className="btn btn-primary" to={`/business/view/${id}`}>View Details</Link>
          { window.location.href.split('/').splice(-1).toString() === 'dashboard' ? <Buttons id={id} deleteBusiness={deleteBusiness} /> : ''}
        </div>
      </div>
      </div>
  );
};

BusinessCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
  category: PropTypes.string.isRequired,
  deleteBusiness: PropTypes.func
};

export default BusinessCard;
