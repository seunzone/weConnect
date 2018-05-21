import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import actions
import { getOneBusiness } from '../../actions/businessAction';

class Buttons extends Component {
    

    render() {
       const { id } = this.props
        return (
            <div className="seeButton">
            <br/>
                <Link to= {`/businesses/edit/${id}`}  className="btn btn-outline-primary">
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</Link>&nbsp;&nbsp;
                <a className="btn btn-outline-danger">
                    <i className="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
            </div>
        )
    }
}

export default Buttons;