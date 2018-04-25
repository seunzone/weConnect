import React from "react";

const SignupForm = () => {
    return (
        <div className="col-lg-4">
            <div className="card bg-primary text-center card-form">
                <div className="card-body">
                    <h3 className="text-white">Sign Up</h3>
                    <h6 className="font-weight-light text-white">
                        Create an account
                  </h6>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Username"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control form-control-sm"
                                placeholder="email address"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control form-control-sm"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control form-control-sm"
                                placeholder=" ConfirmPassword"
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
};

export default SignupForm;
