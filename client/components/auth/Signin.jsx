import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import SigninForm from './SinginForm';


// actions
import { signInUsers } from '../../actions/auth';
import { addFlashMessage } from '../../actions/flashMessages';

class Signin extends React.Component {
  render() {
    const { signInUsers, addFlashMessage } = this.props;
    return (
      <SigninForm signInUsers={ signInUsers } addFlashMessage={addFlashMessage} />
    );
  }
}

Signin.propTypes = {
  signInUsers: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

export default connect((state) => {return {}} , {signInUsers, addFlashMessage })(Signin);
