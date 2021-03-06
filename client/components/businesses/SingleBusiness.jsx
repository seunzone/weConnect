import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  GooglePlusIcon,
  GooglePlusShareButton,
  LinkedinShareButton,
  LinkedinIcon
} from 'react-share';
import rating from '../../utils/rating';
import { addFlashMessage } from '../../actions/flashMessages';
import gif from '../../public/images/loader.gif';
import HomeFooter from '../extras/HomeFooter';

// import components
import AddReviews from '../reviews/AddReviews';

// import actions
import { getOneBusiness } from '../../actions/businessAction';
import addBusinessReview from '../../actions/addReviewAction';
import Business from './Business';
/**
 * @description Shows details of a business
 *
 * @class SingleBusiness
 *
 * @extends {React.Component}
 */
class SingleBusiness extends React.Component {
  /**
   * @description shows instance of single business
   *
   * @constructor
   *
   * @param {any} props
   *
   * @memberof SingleBusiness
   *
   * @returns {void}
   */
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
  }
  /**
   * @description Before component mounts
   *
   * @method isValid
   *
   * @memberof SingleBusiness
   *
   * @returns {void}
   */
  componentDidMount() {
    this.props.getOneBusiness(this.props.match.params.id);
  }
  /**
   * @return {null} new state
   * @param {object} nextProps
   * @memberof SingleBusiness
   */
  componentWillReceiveProps(nextProps) {
    const { Reviews } = nextProps.singleBusiness;
    this.setState({
      reviews: Reviews
    });
  }
  /**
   * @description Render react component
   *
   * @method render
   *
   * @memberof AddNewBusiness
   *
   * @returns {void}
   *
   */
  render() {
    const {
      singleBusiness,
      addBusinessReview,
      params,
      addFlashMessage
    } = this.props;
    const shareUrl = `https://weconnect-seunzone.herokuapp.com/${
      singleBusiness.id
    }`;
    const shareTitle = 'We connect with thy business';
    if (!singleBusiness.Reviews) {
      return <img src={gif} alt="loading..." />;
    }
    const noReviews = (
      <div className="alert alert-danger" role="alert">
        There are no reviews for this business
      </div>
    );

    const showReviews = singleBusiness.Reviews.map(review => (
      <div key={Business.id}>
        <span className="text-danger">{review.User.username}</span> &nbsp;
        <span className="text-muted">
          <i className="fa fa-clock-o" aria-hidden="true" />&nbsp;
          {moment(review.createdAt).format('Do MMMM YYYY HH:mm')}
        </span>&nbsp;&nbsp;
        {rating(review.rating)}
        <br />
        <div className="media">
          <div className="media-body">
            <em>{review.content}</em>
          </div>
        </div>
        <hr />
      </div>
    ));
    const {
      image,
      name,
      createdAt,
      category,
      location,
      description,
      Reviews
    } = this.props.singleBusiness;
    return (
      <div>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="card">
                <img alt="" className="card-img-top detail-img" src={image} />
                <div className="card-body">
                  <h1 className="card-title text-center h4 mb-4">
                    {name}&nbsp; &nbsp;
                    <small className="text-muted">
                      <i className="fa fa-clock-o" aria-hidden="true" />
                      &nbsp; &nbsp;
                      {moment(createdAt).format('Do MMMM YYYY HH:mm')}
                    </small>
                  </h1>
                  <p className="alert alert-info text-center my-4">
                    Category: <b>{category}</b>&nbsp; &nbsp; &nbsp; &nbsp;
                    Location: <b>{location}</b>
                  </p>
                  <p className="text-center my-4">{description}</p>
                  <hr />
                  Share On:<br />
                  <div className="share-div">
                    <FacebookShareButton
                      url={shareUrl}
                      quote={shareTitle}
                      className="share-btn"
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </div>
                  <div className="share-div">
                    <WhatsappShareButton
                      url={shareUrl}
                      title={shareTitle}
                      className="share-btn"
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </div>
                  <div className="share-div">
                    <LinkedinShareButton
                      url={shareUrl}
                      title={shareTitle}
                      className="share-btn"
                    >
                      <LinkedinIcon size={32} round />
                    </LinkedinShareButton>
                  </div>
                  <div className="share-div">
                    <GooglePlusShareButton
                      url={shareUrl}
                      title={shareTitle}
                      className="share-btn"
                    >
                      <GooglePlusIcon size={32} round />
                    </GooglePlusShareButton>
                  </div>
                  <div className="share-div">
                    <TwitterShareButton
                      url={shareUrl}
                      title={shareTitle}
                      className="share-btn"
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </div>
                  <p className="text-muted h6 text-center my-4">
                    <span className="mr-3 h3">
                      <i className="ion ion-happy-outline" />
                      {Reviews.length}
                      <small>Review(s)</small>
                    </span>
                  </p>
                  <hr />
                  <div className="container my-4">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        {showReviews.length === 0 ? noReviews : showReviews}
                      </div>
                    </div>
                  </div>
                  <AddReviews
                    addBusinessReview={addBusinessReview}
                    params={params}
                    addFlashMessage={addFlashMessage}
                    getOneBusiness={this.props.getOneBusiness}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeFooter />
      </div>
    );
  }
}

SingleBusiness.propTypes = {
  addBusinessReview: PropTypes.func.isRequired,
  getOneBusiness: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  singleBusiness: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => ({
  singleBusiness: state.singleBusiness,
  params: props.match.params
});

export default connect(
  mapStateToProps,
  {
    getOneBusiness,
    addBusinessReview,
    addFlashMessage
  }
)(SingleBusiness);
