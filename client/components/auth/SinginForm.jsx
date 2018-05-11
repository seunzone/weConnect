import React from "react";
import { PropTypes } from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';

// actions
import { signInUsers } from '../../actions/signin';
import { addFlashMessage } from '../../actions/flashMessages';


class SigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit(event) {
        event.preventDefault();
            this.setState({ errors: {}, isLoading: true });
            this.props.signInUsers(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'Login successful!'
                    })
                    this.context.router.history.push('/business')
                },
                (res) => this.setState({ errors: res.data.msg, isLoading: false })
            );
    }

    render() {
        const { errors } = this.state;
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
                                    <h6 className="font-weight-light text-white">Enter your login details</h6>
                                    <form onSubmit={this.onSubmit}>
                                        <TextFieldGroup
                                            type="text"
                                            placeholder="email"
                                            field="email"
                                            value={this.state.email}
                                            error={errors.email}
                                            onChange={this.onChange}
                                        />
                                        <TextFieldGroup
                                            type="password"
                                            placeholder="password"
                                            field="password"
                                            value={this.state.password}
                                            error={errors.password}
                                            onChange={this.onChange}
                                        />
                                        <button className="btn btn-warning btn-block">
                                            <i className="fa fa-sign-in" aria-hidden="true"></i> Sign In</button>
                                    </form>
                                    <hr />
                                    <h6 className="text-white">Forgotten your password?
                                <a className="text-white" href="#">Recover it</a>
                                    </h6>
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

};

SigninForm.propTypes = {
    signInUsers: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

SigninForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default SigninForm;
