import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from 'rc-pagination';
import FlashMessagesList from '../flash/FlashMessagesList';


// import components
import BusinessCard from "../cards/BusinessCards";

// import actions
import { getAllBusiness, deleteBusiness } from '../../actions/businessAction';
/**
 * @description Userdashboard
 *
 * @class UserDAshboard
 *
 * @extends {React.Component}
 */
class UserDashboard extends React.Component {
  /**
   * @description Instance of UserDashboard
   *
   * @constructor
   *
   * @param {any} props
   *
   * @memberof UserDashboard
   *
   * @returns {void}
   */
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      count: 0,
      limit: 0
   };
    this.onChange = this.onChange.bind(this);
  }
  /**
   * @description Before component mounts
   *
   * @method isValid
   *
   * @memberof UserDashboard
   *
   * @returns {void}
   */
  componentDidMount() {
    this.props.getAllBusiness()
    .then(() => {
      const { count, currentPage, limit } = this.props.paginate;
      this.setState({ count, currentPage, limit });
    });
  }

  onChange(page) {
    this.props.getAllBusiness(page)
      .then(() => {
        const { count, currentPage, limit } = this.props.paginate;
        this.setState({ count, currentPage, limit });
      });
  }
  /**
     * @description Render react component
     *
     * @method render
     *
     * @memberof UserDashboard
     *
     * @returns {void}
     *
     */
  render() {
    const allBusinesses = this.props.business;
    const { count, currentPage, limit } = this.state;

    const { authId } = this.props;

    const emptyMessage = (
      <div className="alert alert-dark" role="alert">
        You are yet to add a business
      </div>
    )

    const authbusiness = allBusinesses && allBusinesses.filter(business => {
      return business.userId === authId.id;
      
    });
    const showBusiness = authbusiness.map((business) => {
      
      return (
        <BusinessCard
          Key={business.id}
          id={business.id}
          name={business.name}
          image={business.image}
          description={business.description}
          category={business.category}
          deleteBusiness={this.props.deleteBusiness}
        />
      )
    })
    if(!this.props.business){
      return <div>loading</div>
    }
    return (
      <div>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 text-center">
              <FlashMessagesList />
              <h1 className="text-center header-color"><small>Welcome </small></h1>
              <p className="text-center my-4">
                <span className="h6 mr-3">You have created {authbusiness.length} Business(es) Created</span>
              </p>
              <Link to="/businesses/add" className="btn btn-primary text-white">
                <i className="fa fa-plus-circle" aria-hidden="true"></i> Add New Business
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {authbusiness.length === 0 ? emptyMessage : showBusiness }
        </div>
        <div className="d-flex justify-content-center mt-5">
              <Pagination
                showTotal={(total, range) => `${range[0]} - ${range[1]} of ${total} items`}
                total={count}
                pageSize={limit}
                current={currentPage}
                onChange={this.onChange}
              />
            </div>
      </div>
    );
  }
};

UserDashboard.propTypes = {
  getAllBusiness: PropTypes.func.isRequired,
  deleteBusiness: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    business: state.allBusinesses.business,
    authId: state.auth.user,
    paginate: state.allBusinesses.paginate

  }
  
}

export default connect(mapStateToProps, { getAllBusiness, deleteBusiness })(UserDashboard);
