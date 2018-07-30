import reducer from '../../reducers/editBusiness';
import * as types from '../../actions/actionType';

const initialState = {
  hasCreated: false,
  hasError: false,
  business: {},
  error: {}
};


describe('edit business reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });
  it('should handle EDIT_SUCCESSFUL', () => {
    initialState.hasCreated = true;
    expect(reducer(initialState, {
      type: types.EDIT_SUCCESSFUL,
      business: {}
    })).toEqual({
      ...initialState, business: {}
    });
  });
  it('should handle EDIT_FAILED', () => {
    initialState.hasCreated = false;
    initialState.hasError = true;
    expect(reducer(initialState, {
      type: types.EDIT_FAILED,
      error: {}
    })).toEqual({
      ...initialState, business: {}
    });
  });
});
