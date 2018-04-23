import React from "react";

//import components
import AddReview from '../reviews/AddReviews';
import GetReview from '../reviews/GetReviews';

const SingleBusiness = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card">
            <img
              className="card-img-top detail-img"
              src="../../public/images/biz4.jpg"
            />
            <div className="card-body">
              <h1 className="card-title text-center h4 mb-4">
                Andela Nigeria
                <small className="text-muted">
                  <i className="ion ion-clock" />
                  2 days ago
                </small>
              </h1>
              <p className="text-center my-4">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga
              </p>
              <hr />
              <p className="text-muted h6 text-center my-4">
                <span className="mr-3 h3">
                  <i className="ion ion-happy-outline" /> 1
                  <small>Review(s)</small>
                </span>
              </p>
              <hr />
              <GetReview/>
              <AddReview/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBusiness;
