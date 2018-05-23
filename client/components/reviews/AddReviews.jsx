import React from "react";

const AddReviews = () => {
  return (
    <form>
      <h3 className="mb-3 mt-3 text-muted">Leave a review</h3>
      {/* <input className="form-control" placeholder="Your name" /> */}
      <br />
      <textarea
        cols="5"
        rows="5"
        className="form-control"
        placeholder="Leave your review here"
      />
      <button className="btn btn-primary btn-sm mt-3 float-right">
        Save review
      </button>
    </form>
  );
};

export default AddReviews;
