import { GET_ALL_BUSINESS } from '../actions/actionType';

export default function allBusinesses(state = [], action = {}) {
    switch (action.type) {
        case GET_ALL_BUSINESS:
            return action.allBusinesses

        default:
            return state;
    }
}