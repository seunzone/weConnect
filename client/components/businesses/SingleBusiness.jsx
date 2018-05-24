import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import { addFlashMessage } from '../../actions/flashMessages';


//import components
import AddReviews from '../reviews/AddReviews';

// import actions
import { getOneBusiness } from '../../actions/businessAction';
import { addBusinessReview } from '../../actions/addReviewAction';


class SingleBusiness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  }
  componentDidMount() {
    this.props.getOneBusiness(this.props.match.params.id)
  }


  componentWillReceiveProps(nextProps) {
    console.log(nextProps.singleBusiness);

    const {Reviews} = nextProps.singleBusiness;

    this.setState({
      reviews: Reviews
    })
  }

  render() {
    const { singleBusiness, addBusinessReview, params, addFlashMessage } = this.props;

    if (!singleBusiness.Reviews) {
      return <h2>loading...</h2>
    }
    const noReviews = (
      <div className="alert alert-danger" role="alert">
        There are no reviews for this business
      </div>
    )

      const showReviews = singleBusiness.Reviews.map((review) => (
        <div>
          <span className="text-danger">{review.User.username}</span> &nbsp; 
          <span className="text-muted">
          <i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;
          {moment(review.createdAt).format('Do MMMM YYYY HH:mm')}</span>
          <br />
          <div className="media">
            <div className="media-body">
              <em>
                {review.content}
              </em>
            </div>
          </div><hr/>
        </div>
      ))

    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="card">
              <img
                className="card-img-top detail-img"
                src={singleBusiness.image}
              />
              <div className="card-body">
                <h1 className="card-title text-center h4 mb-4">
                  {singleBusiness.name}&nbsp; &nbsp;
                  <small className="text-muted">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    &nbsp; &nbsp;
                    {moment(singleBusiness.createdAt).format('Do MMMM YYYY HH:mm')}
                  </small>
                </h1>
                <p className="alert alert-info text-center my-4">
                  Category: <b>{singleBusiness.category}</b>&nbsp; &nbsp; &nbsp; &nbsp;
                  Location: <b>{singleBusiness.location}</b>
                </p>
                <p className="text-center my-4">
                  {singleBusiness.description}
                </p>
                <hr />
                <p className="text-muted h6 text-center my-4">
                  <span className="mr-3 h3">
                    <i className="ion ion-happy-outline" />
                    {singleBusiness.Reviews.length}
                    <small>Review(s)</small>
                  </span>
                </p>
                <hr />
                <div className="container my-4">
                  <div className="row justify-content-center">
                    <div className="col-10">
                      {showReviews.length === 0 ? noReviews : showReviews}
                    </div>
                  </div>
                </div>
                <AddReviews 
                addBusinessReview={ addBusinessReview } 
                params={ params } 
                addFlashMessage={addFlashMessage}  
                getOneBusiness={this.props.getOneBusiness}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};

SingleBusiness.propTypes = {
  addBusinessReview: PropTypes.func.isRequired,
  getOneBusiness: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired  
}

const mapStateToProps = (state, props) => ({
  singleBusiness: state.singleBusiness,
  params: props.match.params
})

export default connect(mapStateToProps, { getOneBusiness, addBusinessReview, addFlashMessage })(SingleBusiness);
// import React from "react";
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import moment from 'moment';
// import { addFlashMessage } from '../../actions/flashMessages';


// //import components
// import AddReviews from '../reviews/AddReviews';

// // import actions
// import { getOneBusiness } from '../../actions/businessAction';
// import { addBusinessReview } from '../../actions/addReviewAction';


// class SingleBusiness extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       reviews: []
//     }
//   }
//   componentDidMount() {
//     this.props.getOneBusiness(this.props.match.params.id)
//   }


//   componentWillReceiveProps(nextProps) {
//     console.log(nextProps.singleBusiness);

//     const {Reviews} = nextProps.singleBusiness;

//     this.setState({
//       reviews: Reviews
//     })
//   }

//   render() {
//     const { singleBusiness, addBusinessReview, params, addFlashMessage } = this.props;

//     // if (!singleBusiness.Reviews) {
//     //   return <h2>loading...</h2>
//     // }
//     const noReviews = (
//       <div className="alert alert-danger" role="alert">
//         There are no reviews for this business
//       </div>
//     )

//       const showReviews = singleBusiness.Reviews.map((review) => (
//         <div>
//           <span className="text-danger">{review.User.username}</span> &nbsp; 
//           <span className="text-muted">
//           <i className="fa fa-clock-o" aria-hidden="true"></i>&nbsp;
//           {moment(review.createdAt).format('Do MMMM YYYY HH:mm')}</span>
//           <br />
//           <div className="media">
//             <div className="media-body">
//               <em>
//                 {review.content}
//               </em>
//             </div>
//           </div><hr/>
//         </div>
//       ))

//     return (
//       <div className="container my-5">
//         <div className="row justify-content-center">
//           <div className="col-8">
//             <div className="card">
//               <img
//                 className="card-img-top detail-img"
//                 src={singleBusiness.image}
//               />
//               <div className="card-body">
//                 <h1 className="card-title text-center h4 mb-4">
//                   {singleBusiness.name}&nbsp; &nbsp;
//                   <small className="text-muted">
//                     <i className="fa fa-clock-o" aria-hidden="true"></i>
//                     &nbsp; &nbsp;
//                     {moment(singleBusiness.createdAt).format('Do MMMM YYYY HH:mm')}
//                   </small>
//                 </h1>
//                 <p className="alert alert-info text-center my-4">
//                   Category: <b>{singleBusiness.category}</b>&nbsp; &nbsp; &nbsp; &nbsp;
//                   Location: <b>{singleBusiness.location}</b>
//                 </p>
//                 <p className="text-center my-4">
//                   {singleBusiness.description}
//                 </p>
//                 <hr />
//                 <p className="text-muted h6 text-center my-4">
//                   <span className="mr-3 h3">
//                     <i className="ion ion-happy-outline" />
//                     {singleBusiness.Reviews.length}
//                     <small>Review(s)</small>
//                   </span>
//                 </p>
//                 <hr />
//                 <div className="container my-4">
//                   <div className="row justify-content-center">
//                     <div className="col-10">
//                       {showReviews.length === 0 ? noReviews : showReviews}
//                     </div>
//                   </div>
//                 </div>
//                 <AddReviews 
//                 addBusinessReview={ addBusinessReview } 
//                 params={ params } 
//                 addFlashMessage={addFlashMessage}  
//                 getOneBusiness={this.props.getOneBusiness}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

// };

// SingleBusiness.propTypes = {
//   addBusinessReview: PropTypes.func.isRequired,
//   getOneBusiness: PropTypes.func.isRequired,
//   addFlashMessage: PropTypes.func.isRequired  
// }

// const mapStateToProps = (state, props) => ({
//   singleBusiness: state.singleBusiness,
//   params: props.match.params
// })

// export default connect(mapStateToProps, { getOneBusiness, addBusinessReview, addFlashMessage })(SingleBusiness);