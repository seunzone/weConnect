import axios from 'axios';

export const addBusiness = business => dispatch => {
    return axios.post('/api/v1/businesses', business)
        .then(res => res.data.business);
};