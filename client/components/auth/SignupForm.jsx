import React from "react";
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { classnames } from 'classnames';
import TextFieldGroup from '../common/TextFieldGroup';

// validations
import signupValidator from '../../validation/singupValidation';

// actions
import { signUpUsers } from '../../actions/signup';


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
            errors: {},
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
   * @description Validates user's data before making post request
   *
   * @method isValid
   *
   * @memberof Signup
   *
   * @returns {boolean} true or false
   */
    isValid() {
        const { isValid, errors } = signupValidator(this.state);
        if (!isValid) {
            this.setState({ errors });
        } else {
            this.setState({ errors: {} });
            return isValid;
        }
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
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.signUpUsers(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You signed up successfully. Welcome!'
                    });
                    this.context.router.push('/business');
                },
                (err) => this.setState({ errors: err.response.data, isLoading: false })
            );
        }
    }
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
                            {/* <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.onChange}
                                />
                                {errors.username && <span className="help-block">{errors.username}</span>}
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
                                {errors.email && <span className="help-block">{errors.email}</span>}
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
                                {errors.password && <span className="help-block">{errors.password}</span>}
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
                                {errors.passwordConfrim && <span className="help-block">{errors.passwordConfrim}</span>}
                            </div> */}

                            <TextFieldGroup
                                type="text"
                                placeholder="username"
                                field="username"
                                errors={errors.username}
                                value={this.state.username}
                                onChange={this.onChange}
                            />
                            <TextFieldGroup
                                type="email"
                                placeholder="email"
                                field="email"
                                errors={errors.email}
                                value={this.state.email}
                                onChange={this.onChange}
                            />
                            <TextFieldGroup
                                type="password"
                                placeholder="password"
                                field="password"
                                errors={errors.password}
                                value={this.state.password}
                                onChange={this.onChange}
                            />
                            <TextFieldGroup
                                type="password"
                                placeholder="confirm password"
                                field="confrim password"
                                errors={errors.passwordConfrim}
                                value={this.state.passwordConfrim}
                                onChange={this.onChange}
                            />

                           
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
    signUpUsers: PropTypes.func.isRequired
}
SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default SignupForm;