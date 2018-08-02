import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
/**
 * @description Creates Business Review
 *
 * @class AddReviews
 *
 * @extends {React.Component}
 */
export class AddReviews extends React.Component {
  /**
   * @description Creates an instance of AddReview
   *
   * @constructor
   *
   * @param {any} props
   *
   * @memberof AddReview
   *
   * @returns {void}
   */
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      rating: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  /**
  * @description Bind the value of the inputs to state
  *
  * @method onChange
  *
  * @memberof AddReview
  *
  * @param {any} event
  *
  * @returns {void}
  */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
  * @description Handles Form Submission for Review
  *
  * @method onSubmit
  *
  * @param {object} event
  *
  * @memberof AddReview
  *
  * @returns {void}
  */
  onSubmit(event) {
    event.preventDefault();
    this.props.addBusinessReview(this.props.params.id, this.state).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'Thanks for your review'
        });
        this.props.getOneBusiness(this.props.params.id);
      },
      error => this.setState({ errors: error.response.data, isLoading: false })
    );
  }
  /**
     * @description Render react component
     *
     * @method render
     *
     * @memberof AddReview
     *
     * @returns {void}
     *
     */
  render() {
    const { errors } = this.state;

    return (
      <form
        onSubmit={this.onSubmit}
        className={classnames('form-group', { 'has-error': errors })}
      >
        <h3 className="help-block">{errors ? errors.message : null}</h3>
        <h2 className="mb-3 mt-3 text-muted">Rate and leave a review</h2>
        <br />
        <fieldset
          className="rating"
          value={this.state.rating}
          onChange={this.onChange}
        >
          <input type="radio" id="star5" name="rating" value={5} />
          <label htmlFor="star5" />

          <input type="radio" id="star4" name="rating" value={4} />
          <label htmlFor="star4" />

          <input type="radio" id="star3" name="rating" value={3} />
          <label htmlFor="star3" />

          <input type="radio" id="star2" name="rating" value={2} />
          <label htmlFor="star2" />

          <input type="radio" id="star1" name="rating" value={1} />
          <label htmlFor="star1" />
        </fieldset>
        {errors && <span className="help-block">{errors.rating}</span>}
        <textarea
          value={this.state.content}
          onChange={this.onChange}
          name="content"
          cols="5"
          rows="5"
          className="form-control"
          placeholder="Leave your review here"
        />
        {errors && <span className="help-block">{errors.content}</span>}
        <button className="btn btn-primary btn-sm mt-3 float-right">
          Save review
        </button>
      </form>
    );
  }
}

AddReviews.propTypes = {
  getOneBusiness: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  addBusinessReview: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired
};

AddReviews.contextTypes = {
  router: PropTypes.object.isRequired
};

export default AddReviews;
