import axios from 'axios';
import { GET_ALL_BUSINESS } from './actionType';

export function allBusiness(business) {
    return {
        type: GET_ALL_BUSINESS,
        allBusinesses: business
    };
}

export const addBusiness = business => dispatch => {
    return axios.post('/api/v1/businesses', business)
        .then(res => res.data.business);
};

export const getAllBusiness = () => dispatch => 
    axios.get('api/v1/businesses')
        .then((res) => {
            dispatch(allBusiness(res.data.business));
        });
