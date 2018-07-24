import reducer from '../../reducers/allBusinessReducer';
import * as types from '../../actions/actionType';

const initialState = {
  business: [],
  paginate: {}
};

const business = {
  name: 'Andela',
  description: 'Some details',
  image: 'some http address',
  category: 'ict',
  location: 'lagos'
};

const paginate = {
  count: 3,
  pageSize: 4
};

describe('all business reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });

  it('should handle GET_ALL_BUSINESS', () => {
    expect(reducer(initialState, {
      type: types.GET_ALL_BUSINESS,
      allBusinesses: [business]
    })).toEqual({
      ...initialState, business: [business]
    });
  });

  it('should handle PAGINATED_BUSINESS', () => {
    expect(reducer(initialState, {
      type: types.PAGINATED_BUSINESS,
      paginate
    })).toEqual({
      ...initialState, paginate
    });
  });
});
