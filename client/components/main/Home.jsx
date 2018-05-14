import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// actions
import { signUpUsers } from '../../actions/auth';
import { addFlashMessage } from '../../actions/flashMessages';
// components
import TopBusiness from "../businesses/TopBusiness";
import SignupForm  from "../auth/SignupForm";

class Home extends React.Component {
  render() {
    const { signUpUsers, addFlashMessage } = this.props;

    const divStyle = {
      color: "white"
    };
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

                <h1 className="cover-heading">Welcome To WeConnect </h1>
                <br />
                <p className="lead">
                  <a href="#" className="btn btn-warning btn-lg">
                    View Catalogue
                </a>
                </p>
              </div>
              <SignupForm signUpUsers={signUpUsers} addFlashMessage={addFlashMessage}/>
            </div>
          </div>
        </div>
        <TopBusiness />
      </div>
    );
  }
}

Home.propTypes = {
  signUpUsers: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}
  


export default connect((state) =>  { return {}}, { signUpUsers, addFlashMessage })(Home);
