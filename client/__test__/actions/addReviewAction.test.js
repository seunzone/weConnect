/* eslint no-undef: "off" */
import addBusinessReview from '../../actions/addReviewAction';
import * as types from '../../actions/actionType';

const data = {
  id: 1,
  content: { rating: 4, content: 'some text' },
  reviewResponse: {
    status: 'success',
    review: {
      id: 1,
      rating: 4,
      content: 'some text',
      businessId: 2,
      userId: 5
    }
  }
};

describe('Add review actions tests', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should add a new review', (done) => {
    const { id, content, reviewResponse } = data;
    moxios.stubRequest(`/api/v1/businesses/${id}/review`, {
      status: 201,
      response: reviewResponse
    });

    const expectedActions = [{
      type: types.ADD_REVIEWS,
      review: reviewResponse.review
    }];
    const store = mockStore({});

    return store.dispatch(addBusinessReview(id, content))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
