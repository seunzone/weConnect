import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/**
 * @description Buttons for BusinessCards
 *
 * @class Buttons
 *
 * @extends {React.Component}
 */
export class Buttons extends Component {
  render() {
    const { id } = this.props;
    return (
      <div className="seeButton">
        <br />
        <Link to={`/businesses/edit/${id}`} className="btn btn-outline-primary">
          <i className="fa fa-pencil-square-o" aria-hidden="true" /> Edit
        </Link>&nbsp;&nbsp;
        <button
          className="btn btn-outline-danger"
          data-toggle="modal"
          data-target="#deleteModal"
          onClick={() => window.businessId = id}
        >
          <i className="fa fa-trash-o" aria-hidden="true" /> Delete
        </button>
      </div>
    );
  }
}

export default Buttons;
