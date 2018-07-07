import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from 'rc-pagination';
import BusinessCard from '../cards/BusinessCards';
import FlashMessagesList from '../flash/FlashMessagesList';
import { getAllBusiness, getBusinessSearchAction } from '../../actions/businessAction';
import HomeFooter from '../extras/HomeFooter';

/**
 * @description Business Cards
 *
 * @class Businesses
 *
 * @extends {React.Component}
 */
class Businesses extends React.Component {
  /**
   * @description Instance of Businesscard
   *
   * @constructor
   *
   * @param {any} props
   *
   * @memberof Businesses
   *
   * @returns {void}
   */
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      count: 0,
      limit: 0,
      searchKeyType: "",
      keyValue: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onChangeThis = this.onChangeThis.bind(this);
  }
  /**
   * @description Before component mounts
   *
   * @method isValid
   *
   * @memberof Business
   *
   * @returns {void}
   */
  componentDidMount() {
    this.props.getAllBusiness().then(() => {
      const { count, currentPage, limit } = this.props.paginate;
      this.setState({ count, currentPage, limit });
    });
  }
  onChange(page) {
    this.props.getAllBusiness(page).then(() => {
      const { count, currentPage, limit } = this.props.paginate;
      this.setState({ count, currentPage, limit });
    });
  }
  /**
  * @description Bind the value of the inputs to state
  *
  * @method onChange
  *
  * @memberof Businesses
  *
  * @param {any} event
  *
  * @returns {void}
  */
  onChangeThis(event){
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }
   /**
   * @description use value for search
   *
   * @method onChange
   *
   * @memberof SearchBusiness
   *
   * @param {any} event
   *
   * @returns {void}
   */
  onSearch(event) {
    event.preventDefault();
    const { searchKeyType, keyValue } = this.state;
    if (!searchKeyType || !keyValue) {
      this.props.getAllBusiness();
    }
    this.props.getBusinessSearchAction(searchKeyType.toLowerCase(), keyValue).then(() => {
      const { count, currentPage, limit } = this.props.paginate;
      this.setState({ count, currentPage, limit });
    });
  }
  /**
   * @description Render react component
   *
   * @method render
   *
   * @memberof Businesses
   *
   * @returns {void}
   *
   */
  render() {
    const allBusinesses = this.props.business;
    const { count, currentPage, limit } = this.state;
    const emptyMessage = (
      <div className="alert alert-light col-md-offset-4" role="alert">
        <img
          src="../../public/images/ops.gif"
          alt=""
          className="emojis"
        /><br />
        <span className="text-danger">
          Ops!!! You seem to have searched for what does not exist on this platfrom.<br />
          Please try again. Thanks
        </span>
      </div>
    )
    const showBusiness = allBusinesses.map(business => {
      return (
        <BusinessCard
          key={business.id}
          id={business.id}
          name={business.name}
          image={business.image}
          description={business.description}
          category={business.category}
        />
      );
    });
    {
      const DivStyle = {
        padding: "padding: 30px 0px"
      };
      return (
        <div>
          <FlashMessagesList />
          <div className="landing-banner">
            <div className="banner-content">
              <h1 className="banner-title">Search for a Business Today</h1>
              <p>Review your customer experience.</p>
              <form onSubmit={this.onSearch}>
                <div className="select-fields">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        className="form-control"
                        placeholder="Enter keyword here"
                        name="keyValue" 
                        onChange={this.onChangeThis}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <select className="form-control" name="searchKeyType" onChange={this.onChangeThis}>
                        <option>Search by</option>
                        <option value={this.state.category}>Category</option>
                        <option value={this.state.location}>Location</option>
                      </select>
                    </div>
                  </div>
                  <button className="btn btn-primary">Search Now</button>
                </div>
              </form>
            </div>
          </div>
          <div className="container-fluid px-5 my-5">
            <h1
              className="display-4 text-center my-5 wow fadeInDown"
              style={DivStyle}
            >
              Business Listings
            </h1>
            <br />
            <div className="card-deck wow fadeIn" />
            <div className="row">
              {showBusiness.length === 0 ? emptyMessage  : allBusinesses && showBusiness}
            </div>
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                showTotal={(total, range) =>
                  `${range[0]} - ${range[1]} of ${total} items`
                }
                total={count}
                pageSize={limit}
                current={currentPage}
                onChange={this.onChange}
              />
            </div>
          </div>
          <HomeFooter />
        </div>
      );
    }
  }
}

Businesses.propTypes = {
  getAllBusiness: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  business: state.allBusinesses.business,
  paginate: state.allBusinesses.paginate
});

export default connect(
  mapStateToProps,
  { getAllBusiness, getBusinessSearchAction }
)(Businesses);
