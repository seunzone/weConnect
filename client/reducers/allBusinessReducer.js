import { GET_ALL_BUSINESS, DELETE_BUSINESS, PAGINATED_BUSINESS } from '../actions/actionType';

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
    case DELETE_BUSINESS:
      return state.filter(business => business.id !== action.businessId);
    case PAGINATED_BUSINESS:
      return { ...state, paginate: action.paginate };
    default:
      return state;
  }
}
