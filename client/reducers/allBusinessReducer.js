import { GET_ALL_BUSINESS } from '../actions/actionType';

export default function all_businesses(state = [], action = {}) {
    switch (action.type) {
        case GET_ALL_BUSINESS:
        return action.allBusiness
        default:
            return state;
    }
}