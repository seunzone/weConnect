import React from 'react';
import { PropTypes } from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
/**
 * @description Signs in user
 *
 * @class SigninForm
 *
 * @extends {React.Component}
 */
export const SigninForm = ({ onChange, onSubmit, state }) => {
  const { errors } = state;
  const { email, password } = state;
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-4 col-lg-4 col-xs-4">
            <div className="card bg-primary text-center card-form">
              <div className="card-body">
                <h3 className="text-white">Sign In</h3><hr />
                <h6 className="font-weight-light text-white">
                  Enter your login details
                </h6>
                <p className="help-block">{errors ? errors.message : null}</p>
                <form onSubmit={onSubmit}>
                  <TextFieldGroup
                    type="text"
                    placeholder="email"
                    field="email"
                    value={email}
                    error={errors.error ? errors.error.email : ''}
                    onChange={onChange}
                  />
                  <TextFieldGroup
                    type="password"
                    placeholder="password"
                    field="password"
                    value={password}
                    error={errors.error ? errors.error.password : ''}
                    onChange={onChange}
                  />
                  <button className="btn btn-warning btn-block" id="signin">
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
};

SigninForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

export default SigninForm;
