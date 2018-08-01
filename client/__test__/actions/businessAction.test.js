/* eslint no-undef: "off" */
import * as actions from '../../actions/businessAction';
import * as types from '../../actions/actionType';

import {
  myBusiness,
  businessDetails,
  allMyBusinesses,
} from '../__mocks__/businessActionMocks';

describe('Business Actions Test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('get all the businesses action', () => {
    it('should get all the businesses', (done) => {
      moxios.stubRequest('api/v1/businesses?page=1', {
        status: 200,
        response: {
          business: allMyBusinesses,
          paginate: {}
        }
      });
      const expectedActions = [
        {
          type: types.GET_ALL_BUSINESS,
          allBusinesses: allMyBusinesses
        },
        {
          type: types.PAGINATED_BUSINESS,
          paginate: {}
        },
      ];
      const store = mockStore({});

      return store.dispatch(actions.getAllBusiness(1))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });

  describe('get a single business action', () => {
    it('should retrieve the details of a single business', (done) => {
      moxios.stubRequest(`/api/v1/businesses/${1}`, {
        status: 200,
        response: myBusiness
      });
      const expectedActions = [
        {
          type: types.GET_SINGLE_BUSINESS,
          oneBusiness: myBusiness
        }
      ];
      const store = mockStore({});
      return store.dispatch(actions.getOneBusiness(1))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });

  describe('delete business action', () => {
    it('should delete an existing business', (done) => {
      moxios.stubRequest(`/api/v1/businesses/${1}`, {
        status: 200,
        response: myBusiness
      });
      const expectedActions = [
        {
          type: types.DELETE_BUSINESS,
          businessId: 1
        }
      ];
      const store = mockStore({});
      return store.dispatch(actions.deleteBusiness(1))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });

  describe('business search result action', () => {
    it('should show results for users search input', (done) => {
      const searchKeyType = '';
      const keyValue = '';
      const page = 1;
      moxios.stubRequest(`api/v1/businesses?${searchKeyType}=${keyValue}&page=${page || 1}`, {
        status: 200,
        response: {
          business: myBusiness,
          paginate: {}
        }
      });
      const expectedActions = [
        {
          type: types.GET_ALL_BUSINESS,
          allBusinesses: myBusiness
        },
        {
          type: types.PAGINATED_BUSINESS,
          paginate: {}
        },
      ];
      const store = mockStore({});
      return store.dispatch(actions.getBusinessSearchAction(searchKeyType, keyValue, page))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });

  describe('add business action', () => {
    it('should add a new business', (done) => {
      moxios.stubRequest('/api/v1/businesses', {
        status: 200,
        response: {
          business: myBusiness,
        }
      });
      const expectedActions = [];
      const store = mockStore({});
      return store.dispatch(actions.addBusiness(myBusiness))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });
});
