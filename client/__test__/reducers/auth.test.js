import reducer from '../../reducers/auth';
import * as types from '../../actions/actionType';

const initialState = {
  isAuthenticated: false,
  user: {}
};

describe('authentication reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });
  it('should handle CURRENT_USER', () => {
    expect(reducer(initialState, {
      type: types.CURRENT_USER,
      user: false
    })).toEqual({
      ...initialState, user: false
    });
  });
});
