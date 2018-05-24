import { GET_SINGLE_BUSINESS, ADD_REVIEWS } from '../actions/actionType';

export default function singleBusiness(state = {}, action = {}) {
    switch (action.type) {
        case GET_SINGLE_BUSINESS:
            return action.oneBusiness;
       
        case ADD_REVIEWS:
            return [
                ...state.Reviews,
                action.review
            ]
        default:
            return state;
    }
}