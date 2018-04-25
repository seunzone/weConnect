import React from "react";

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfrim: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state)
    }
    render () {
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

export default SignupForm;
