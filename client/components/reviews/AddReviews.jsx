import React from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
// actions
import { addBusinessReview } from "../../actions/addReviewAction";
import { getOneBusiness } from "../../actions/businessAction";
import { addFlashMessage } from "../../actions/flashMessages";

class AddReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      rating: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.addBusinessReview(this.props.params.id, this.state).then(
      () => {
        this.props.addFlashMessage({
          type: "success",
          text: "Thanks for your review"
        });
        this.props.getOneBusiness(this.props.params.id);
      },
      error => this.setState({ errors: error.response.data, isLoading: false })
    );
  }

  render() {
    const { errors } = this.state;

    return (
      <form
        onSubmit={this.onSubmit}
        className={classnames("form-group", { "has-error": errors })}
      >
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
  addFlashMessage: PropTypes.func.isRequired
};

AddReviews.contextTypes = {
  router: PropTypes.object.isRequired
};

export default AddReviews;
