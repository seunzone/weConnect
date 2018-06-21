import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
// actions
import { signUpUsers } from '../../actions/auth';
import { addFlashMessage } from '../../actions/flashMessages';
import { getAllBusiness } from '../../actions/businessAction';
// components
import BusinessCard from '../cards/BusinessCards';
import SignupForm from "../auth/SignupForm";

/**
 * @description Home Page
 *
 * @class Home
 *
 * @extends {React.Component}
 */
class Home extends React.Component {
   /**
   *
   * @constructor
   *
   * @param {any} props
   *
   * @memberof Home
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
     * @memberof  Home
     *
     * @returns {void}
     *
     */
  render() {
    const { isAuthenticated } = this.props.auth;    
    const allBusinesses = this.props.business;
    const { signUpUsers, addFlashMessage } = this.props;
    const someBusiness = allBusinesses.map((business, i) => {
      if (i < 3) {
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
      }
    })
    const divStyle = { color: "white" };
    return (
      <div>
        <div id="jumbotron" className="jumbotron text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8" style={divStyle}>
                <br />
                <br />
                <img
                  src="../../public/images/icon.png"
                  className="jumbotron-logo-img mr-2"
                  alt=""
                />

                <h1>WeConnect</h1>
                <br />
                <p className="lead">
                  <Link to="/business" className="btn btn-warning btn-lg">
                    View Catalogue
                  </Link>
                </p>
              </div>
              <SignupForm signUpUsers={signUpUsers} addFlashMessage={addFlashMessage} />
            </div>
          </div>
        </div>
        <section className="container text-center">
          <h3>Some Businesses in Lagos</h3>
        </section>
        <section className="home_details">
          <div className="row card-deck">
            {someBusiness}
          </div>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  signUpUsers: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  getAllBusiness: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,  
}
const mapStateToProps = state => ({
  business: state.allBusinesses.business,
  auth: state.auth  
})

export default connect(mapStateToProps, { signUpUsers, addFlashMessage, getAllBusiness })(Home);
