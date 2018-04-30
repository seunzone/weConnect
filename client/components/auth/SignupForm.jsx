import React from "react";
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { classnames } from 'classnames';

// validations
// import signupValidator from '../../validation/singupValidation';

// actions
import { getUsers } from '../../actions/signup';


/**
 * @description Creates Signup Feature
 *
 * @class SignupForm
 *
 * @extends {React.Component}
 */
class SignupForm extends React.Component {
    /**
   * @description Creates an instance of SignupFrom
   *
   * @constructor
   *
   * @param {any} props
   *
   * @memberof SignupForm
   *
   * @returns {void}
   */
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfrim: '',
            errors: [],
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    /**
  * @description Bind the value of the inputs to state
  *
  * @method onChange
  *
  * @memberof SignupForm
  *
  * @param {any} event
  *
  * @returns {void}
  */
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    /**
  * @description Handles Form Submission
  *
  * @method onSubmit
  *
  * @param {object} event
  *
  * @memberof SignupForm
  *
  * @returns {void}
  */
    onSubmit(e) {
        e.preventDefault();
        this.setState({ errors: [], isLoading: true });
        this.props.getUsers(this.state).then(
            () => {
                this.context.router.history.push('/business')
            },
            ({ res }) => this.setState({ errors: 'Hello' })
        );
    }
    /**
   * @description Validate user data before making request
   *
   * @method isValid
   *
   * @memberof SignupForm
   *
   * @returns {boolean} true or false
   */
    //   isValid() {
    //     const { isValid, errors } = signupValidator(this.state);
    //     if (!isValid) {
    //       this.setState({ errors });
    //     } else {
    //       this.setState({ errors: {} });
    //       return isValid;
    //     }
    //   }
    /**
     * @description Render react component
     *
     * @method render
     *
     * @memberof SignupForm
     *
     * @returns {void}
     *
     */
    render() {
        const { errors } = this.state;
        return (
            <div className="col-lg-4">
                <div className="card bg-primary text-center card-form">
                    <div className="card-body">
                        <h3 className="text-white">Sign Up</h3>
                        <h6 className="font-weight-light text-white">
                            Create an account
                      </h6>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="email address"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control form-control-sm"
                                    placeholder="Confirm Password"
                                    name="passwordConfrim"
                                    value={this.state.passwordConfrim}
                                    onChange={this.onChange}
                                />
                            </div>

                            <button className="btn btn-warning btn-block">
                                <i className="fa fa-user-plus" aria-hidden="true" /> Sign
                          Up
                        </button>
                        </form>
                        <hr />
                        <h6 className="text-white">
                            Forgotten your password?
                        <a className="text-white" href="#">
                                Recover it
                        </a>
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
};

SignupForm.propTypes = {
    getUsers: PropTypes.func.isRequired
}
SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default SignupForm;