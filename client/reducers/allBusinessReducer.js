import { GET_ALL_BUSINESS, PAGINATED_BUSINESS } from '../actions/actionType';

const initialState = {
  business: [],
  paginate: {}
};
/**
 * @param {*} state
 *
 * @param {*} action
 *
 * @returns {Object} all businesses
 */
export default function allBusinesses(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_BUSINESS:
      return { ...state, business: action.allBusinesses };
    case PAGINATED_BUSINESS:
      return { ...state, paginate: action.paginate };
    default:
      return state;
  }
}
