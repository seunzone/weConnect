import axios from 'axios';
import { ADD_REVIEWS } from './actionType'

const addReview = (review) => {
    return {
        type: ADD_REVIEWS,
        review
    }
}

export const addBusinessReview = (id, content) => dispatch => {
    return axios.post('/api/v1/businesses/' + id + '/review', content)
        .then(res => {
            dispatch(addReview(res.data.review));
        });
};