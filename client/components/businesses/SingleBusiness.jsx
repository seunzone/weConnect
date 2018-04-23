import React from "react";

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
              <div className="container my-4">
                <div className="row justify-content-center">
                  <div className="col-10">
                    <div className="media">
                      <small className="text-primary">Chioma </small> &nbsp;
                      <div className="media-body">
                        <em>
                          And the company of the year award goes to you, thanks
                          for your contribution to the community.
                        </em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="mb-3 mt-3 text-muted">Leave a review</h3>
              <input className="form-control" placeholder="Your name" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBusiness;
