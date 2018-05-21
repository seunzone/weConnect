import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Buttons extends Component {
    render() {
        return (
            <div className="seeButton">
            <br/>
                <a href="#" className="btn btn-outline-primary">
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</a>&nbsp;&nbsp;
                <a className="btn btn-outline-danger">
                    <i className="fa fa-trash-o" aria-hidden="true"></i> Delete</a>
            </div>
        )
    }
}

export default Buttons;