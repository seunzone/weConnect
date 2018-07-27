import reducer from '../../reducers/getSingleBusiness';
import * as types from '../../actions/actionType';

let initialState = {};

const profile = {
  name: 'Andela Nigeria',
  description: 'Brilliance is evenly distributed, opprotunity is not',
  image: 'https://images.pexels.com/photos/1023953/pexels-photo-1023953.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  category: 'ICT',
  location: 'Lagos Nigeria'
};

let state;
describe('single business reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });

  it('should get single GET_SINGLE_BUSINESS', () => {
    state = profile;
    expect(reducer(initialState, {
      type: types.GET_SINGLE_BUSINESS,
      oneBusiness: profile
    })).toEqual(state);

    initialState = state;
  });
});
