import { GET_ALL_BUSINESS, DELETE_BUSINESS } from '../actions/actionType';

export default function allBusinesses(state = [], action = {}) {
    switch (action.type) {
        case GET_ALL_BUSINESS:
            return action.allBusinesses
        case DELETE_BUSINESS:
            return state.filter(business => business.id !== action.businessId);
        default:
            return state;
    }
}