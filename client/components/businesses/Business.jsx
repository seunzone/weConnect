import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import components
import BusinessCard from "../cards/BusinessCards";
import SearchBusiness from "./SearchBusiness";
import Pagination from "./Pagination";
import FlashMessagesList from '../flash/FlashMessagesList';
// import actions
import { getAllBusiness } from '../../actions/businessAction';
/**
 * @description Business Cards
 *
 * @class Businesses
 *
 * @extends {React.Component}
 */
class Businesses extends React.Component{
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
  }
  /**
   * @description Before component mounts
   *
   * @method isValid
   *
   * @memberof Home
   *
   * @returns {void}
   */
  componentDidMount() {
    this.props.getAllBusiness()
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
    const showBusiness = allBusinesses.map((business) => {
      return (
        <BusinessCard
          Key={business.id}
          id={business.id}
          name={business.name}
          image={business.image}
          description={business.description}
          category={business.category}
        />
      )
    })
    {
      const DivStyle = {
        padding: "padding: 30px 0px"
      };
      return (
        <div>
          <FlashMessagesList />
          <SearchBusiness />
          <div className="container-fluid px-5 my-5">
            <h1
              className="display-4 text-center my-5 wow fadeInDown"
              style={DivStyle}
            >
              Some Top Firms
            </h1>
            <br />
            <div className="card-deck wow fadeIn" />
            <div className="row">
              {allBusinesses && showBusiness}
            </div>
            <Pagination />
          </div>
        </div>
      );
    }
  }
}

Businesses.propTypes = {
  getAllBusiness: PropTypes.func.isRequired
}
const mapStateToProps = state => ({
  business: state.allBusinesses,
})

export default connect(mapStateToProps, { getAllBusiness })(Businesses);

