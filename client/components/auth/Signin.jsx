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
export class Signin extends React.Component {
  /**
   * @description Creates an instance of SigninForm
   *
   * @constructor
   *
   * @param {any} props
   *
   * @memberof SignuinForm
   *
   * @returns {void}
   */
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  /**
   * @description Bind the value of the inputs to state
   *
   * @method onChange
   *
   * @memberof SigninForm
   *
   * @param {any} event
   *
   * @returns {void}
   */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
   * @description Handles Form Submission
   *
   * @method onSubmit
   *
   * @param {object} event
   *
   * @memberof SigninForm
   *
   * @returns {void}
   */
  onSubmit(event) {
    event.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.signInUsers(this.state).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'Login successful!'
        });
        this.context.router.history.push('/business');
      },
      error => this.setState({ errors: error.response.data, isLoading: false }),
    );
  }
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
    const { onChange, onSubmit, state } = this;
    return (
      <SigninForm
        signInUsers={this.props.signInUsers}
        addFlashMessage={this.props.addFlashMessage}
        onChange={onChange}
        onSubmit={onSubmit}
        state={state}
      />
    );
  }
}

Signin.propTypes = {
  signInUsers: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
};

Signin.contextTypes = {
  router: PropTypes.object.isRequired
};


export default connect(() => ({}), { signInUsers, addFlashMessage })(Signin);
