import axios from 'axios';
import { POST_BUSINESS } from './actionType';

export function createBusiness(business) {
    return {
        type: 'POST_BUSINESS',
        business
    };
}

export const addBusiness = business => (dispatch) => {
    return axios.post('api/v1/businesses', business)
      .then((res) => {
        dispatch(createBusiness(res.data.business));
      });
  };
  