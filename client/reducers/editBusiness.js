import { EDIT_SUCCESSFUL, EDIT_FAILED } from '../actions/actionType';
const initialState = {
    hasCreated: false,
    hasError: false,
    business: {},
    error: {}
}

export default function editBusiness(state = initialState, action = {}) {
    switch (action.type) {
        case EDIT_SUCCESSFUL:
        return {
            hasCreated: true,
            hasError: false,
            business: action.business,
            error: {}
        };
        case EDIT_FAILED:
        return {
            hasCreated: false,
            hasError: true,
            business: {},
            error: action.error
        };

        default:
            return state;
    }
}