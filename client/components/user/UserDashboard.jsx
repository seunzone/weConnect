import React from "react";
import UserBusinesses from './UserBusinesses';
import { Link } from "react-router-dom";
import FlashMessagesList from '../flash/FlashMessagesList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import components
import BusinessCard from "../cards/BusinessCards";

// import actions
import { getAllBusiness } from '../../actions/businessAction';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getAllBusiness()
  }
  render() {
    const allBusinesses = this.props.business;

    const { authId } = this.props;

    const emptyMessage = (
      <div className="alert alert-dark" role="alert">
        You are yet to add a business
        </div>
    )

    const authbusiness = allBusinesses && allBusinesses.filter(business => {
      return business.userId === authId;
    });
    
    const showBusiness = authbusiness.map((business) => {
      return (
        <BusinessCard
          Key={business}
          id={business.id}
          name={business.name}
          image={business.image}
          description={business.description}
          category={business.category}
        />
      )
    })
    console.log(allBusinesses)
    console.log('all the biz lenght is ' +  allBusinesses.length)
    
    return (
      <div>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 text-center">
              <FlashMessagesList />
              <h1 className="text-center header-color"><small>Welcome </small>username</h1>
              <p className="text-center my-4">
                <span className="mr-3 h2 header-color"> 51 </span>
                <span className="h6 mr-3">Businesses Created</span>
                <span className="mr-3 h2 header-color"> 531 </span>
                <span className="h6">Reviews</span>
              </p>
              <Link to="/businesses/add" className="btn btn-info text-white">
                <i className="fa fa-plus-circle" aria-hidden="true"></i> Add New Business
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {/* {allBusinesses.length == 0 ? showBusiness : emptyMessage} */}
          { allBusinesses && showBusiness }
        </div>

      </div>
    );
  }
};

UserDashboard.propTypes = {
  getAllBusiness: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  business: state.allBusinesses,
  authId: state.auth.user.id
})

export default connect(mapStateToProps, { getAllBusiness })(UserDashboard);
