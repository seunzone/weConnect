import { GET_SINGLE_BUSINESS } from '../actions/actionType';
/**
 * @param {*} state
 *
 * @param {*} action
 *
 * @returns {Object} a businesses
 */
export default function singleBusiness(state = {}, action = {}) {
  switch (action.type) {
    case GET_SINGLE_BUSINESS:
      return action.oneBusiness;
    default:
      return state;
  }
}
