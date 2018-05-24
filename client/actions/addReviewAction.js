import axios from 'axios';

export const addBusinessReview = (id, content) => dispatch => {
    return axios.post('/api/v1/businesses/' + id + '/review', content)
        .then(res => res.data.review);
};