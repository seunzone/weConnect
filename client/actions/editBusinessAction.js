import axios from 'axios';
import {
  EDIT_FAILED,
  EDIT_SUCCESSFUL
} from './actionType';
/**
 * @description - Edits Business
 * @export { Function } - Edit business in store
 * @param {*} business
 * @returns { Business } - Action
 */
export function editSuccessful(business) {
  return {
    type: EDIT_SUCCESSFUL,
    business
  };
}
/**
 * @description - Adds Business
 * @export { Function } - Adds business to store
 * @param {*} error
 * @returns { Business } - Action
 */
export function editFailed(error) {
  return {
    type: EDIT_FAILED,
    error
  };
}

export const editBusiness = (id, business) => dispatch =>
  axios.put(`/api/v1/businesses/${id}`, business)
    .then(() => {
      dispatch(editSuccessful(' Business Sucessfully Updated'));
    })
    .catch(() => {
      dispatch(editFailed('Business failed to update'));
    });
