import React from "react";
import { PropTypes } from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";

// actions
import { signInUsers } from "../../actions/auth";
import { addFlashMessage } from "../../actions/flashMessages";

/**
 * @description Signs in user
 *
 * @class SigninForm
 *
 * @extends {React.Component}
 */
class SigninForm extends React.Component {
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
      email: "",
      password: "",
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
          type: "success",
          text: "Login successful!"
        });
        this.context.router.history.push("/business");
      },
      (error) => this.setState({ errors: error.response.data, isLoading: false }),
    );
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
    console.log(errors)
    return (
      <div>
        <br />
        <br />
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-4 col-lg-4 col-xs-4">
              <div className="card bg-primary text-center card-form">
                <div className="card-body">
                  <h3 className="text-white">Sign In</h3>
                  <h6 className="font-weight-light text-white">
                    Enter your login details
                  </h6>
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      type="text"
                      placeholder="email"
                      field="email"
                      value={this.state.email}
        
                      error={errors.error ? errors.error.email : ""}
                      onChange={this.onChange}
                    />
                    <TextFieldGroup
                      type="password"
                      placeholder="password"
                      field="password"
                      value={this.state.password}
                      error={errors.error ? errors.error.password : ""}
                      onChange={this.onChange}
                    />
                    <button className="btn btn-warning btn-block">
                      <i className="fa fa-sign-in" aria-hidden="true" /> Sign In
                    </button>
                  </form><hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

SigninForm.propTypes = {
  signInUsers: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
};

SigninForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SigninForm;
