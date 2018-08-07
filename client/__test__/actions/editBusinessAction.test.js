/* eslint no-undef: "off" */
import * as actions from '../../actions/editBusinessAction';
import * as types from '../../actions/actionType';

describe('Business Actions Test', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  describe('edit business action', () => {
    it('should edit an existing business', (done) => {
      moxios.stubRequest(`/api/v1/businesses/${1}`, {
        status: 200,
        response: {
          business: 'Business Sucessfully Updated'
        }
      });
      const expectedActions = [
        {
          type: types.EDIT_SUCCESSFUL,
          business: 'Business Sucessfully Updated'
        }
      ];
      const store = mockStore({});
      return store.dispatch(actions.editBusiness(1))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });

    it('should not edit the details of the business business', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 400,
          response: {
            business: 'Business failed to update'
          }
        });
      });
      const expectedActions = [
        {
          type: types.EDIT_FAILED,
          error: 'Business failed to update'
        }
      ];
      const store = mockStore({});
      return store.dispatch(actions.editBusiness(1))                
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
    });
  });
});
