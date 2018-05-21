import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

//import components
import AddReview from '../reviews/AddReviews';
//import GetReview from '../reviews/GetReviews';

// import actions
import { getOneBusiness } from '../../actions/businessAction';

class SingleBusiness extends React.Component {
  componentDidMount() {
    this.props.getOneBusiness(this.props.match.params.id)
  }
  render() {
    // const { business } = this.props;
    const { singleBusiness } = this.props;
    console.log(singleBusiness.Reviews)
    const emptyMessage = (
      <div className="alert alert-dark" role="alert">
        No reviews for this business
        </div>)
    const showReviews = (
      <div className="media">
      <small className="text-primary">Chioma </small> &nbsp;
        <div className="media-body">
        <em>
          And the company of the year award goes to you, thanks for your
          contribution to the community.
        </em>
      </div>
    </div>
    )
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card">
              <img
                className="card-img-top detail-img"
                src={singleBusiness.image}
              />
              <div className="card-body">
                <h1 className="card-title text-center h4 mb-4">
                  {singleBusiness.name}&nbsp; &nbsp;
                  <small className="text-muted">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    &nbsp; &nbsp;
                    {moment(singleBusiness.createdAt).format('Do MMMM YYYY HH:mm')}
                  </small>
                </h1>
                <p className="alert alert-info text-center my-4">
                  Category: <b>{singleBusiness.category}</b>&nbsp; &nbsp; &nbsp; &nbsp;
                  Location: <b>{singleBusiness.location}</b>
                </p>
                <p className="text-center my-4">
                  {singleBusiness.description}
                </p>
                <hr />
                <p className="text-muted h6 text-center my-4">
                  <span className="mr-3 h3">
                    <i className="ion ion-happy-outline" /> 1
                    {/* {singleBusiness.Reviews.length} */}
                    <small>Review(s)</small>
                  </span>
                </p>
                <hr />
                <div className="container my-4">
                  <div className="row justify-content-center">
                    <div className="col-10">
                      {showReviews}
                    </div>
                  </div>
                </div>
                <AddReview />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

const mapStateToProps = state => ({
  singleBusiness: state.singleBusiness
})

export default connect(mapStateToProps, { getOneBusiness })(SingleBusiness);