import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import SigninForm from './SinginForm';


// actions
import { signInUsers } from '../../actions/auth';
import { addFlashMessage } from '../../actions/flashMessages';
/**
 * @description Creates Signup Feature
 *
 * @class SignupForm
 *
 * @extends {React.Component}
 */
class Signin extends React.Component {
  /**
     * @description Render react component
     *
     * @method render
     *
     * @memberof Signin
     *
     * @returns {void}
     *
     */
  render() {
    const { signInUsers, addFlashMessage } = this.props;
    return (
      <SigninForm signInUsers={signInUsers} addFlashMessage={addFlashMessage} />
    );
  }
}

Signin.propTypes = {
  signInUsers: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

export default connect(state => ({}), { signInUsers, addFlashMessage })(Signin);
