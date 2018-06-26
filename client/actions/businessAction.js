import axios from "axios";
import {
  GET_ALL_BUSINESS,
  GET_SINGLE_BUSINESS,
  DELETE_BUSINESS,
  PAGINATED_BUSINESS
} from "./actionType";

export function allBusiness(business) {
  return {
    type: GET_ALL_BUSINESS,
    allBusinesses: business
  };
}

export function paginatedBusiness(paginate) {
  return {
    type: PAGINATED_BUSINESS,
    paginate
  };
}

export function oneBusiness(business) {
  return {
    type: GET_SINGLE_BUSINESS,
    oneBusiness: business
  };
}

const businessToBeDeleted = businessId => ({
  type: DELETE_BUSINESS,
  businessId
});

export const getAllBusiness = page => dispatch =>
  axios.get(`api/v1/businesses?page=${page || 1}`).then(res => {
    dispatch(allBusiness(res.data.business));
    dispatch(paginatedBusiness(res.data.paginate));
  });

export const getBusinessSearchAction = (searchKeyType, keyValue, page) => dispatch =>
  axios.get(`api/v1/businesses?${searchKeyType}=${keyValue}&page=${page || 1}`).then(res => {
    dispatch(allBusiness(res.data.business));
    dispatch(paginatedBusiness(res.data.paginate));
  });

export const getOneBusiness = id => dispatch =>
  axios.get("/api/v1/businesses/" + id).then(res => {
    dispatch(oneBusiness(res.data));
  });

export const deleteBusiness = id => dispatch =>
  axios.delete("/api/v1/businesses/" + id).then(() => {
    dispatch(businessToBeDeleted(id));
  });
