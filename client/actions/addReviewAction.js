import axios from 'axios';
import { ADD_REVIEWS } from './actionType';

/**
 * @description - Add new review
 * @export { Function } - Add Review
 * @param {*} review
 * @returns { review } - Action
 */
const addReview = review => ({
  type: ADD_REVIEWS,
  review
});

/**
 * @description - Posts a new review
 * @param {*} id
 * @param {*} content
 * @returns { review } - Action
 */
const addBusinessReview = (id, content) => dispatch => axios.post(`/api/v1/businesses/${id}/review`, content)
  .then((res) => {
    dispatch(addReview(res.data.review));
  });

export default addBusinessReview;
