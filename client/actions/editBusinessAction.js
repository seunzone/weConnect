import axios from 'axios';
import {
    EDIT_FAILED,
    EDIT_SUCCESSFUL
} from './actionType';

export function editSuccessful(business) {
    return {
        type: EDIT_SUCCESSFUL,
        business
    };
}

export function editFailed(error) {
    return {
        type: EDIT_FAILED,
        error
    };
}

export const editBusiness = (id, business) => dispatch =>
    axios.put('/api/v1/businesses/' + id, business)
        .then(() => {
            dispatch(editSuccessful(' Business Sucessfully Updated'));
        })
        .catch(() => {
            dispatch(editFailed('Business failed to update'));
        });