import reducer from '../../reducers/imageUploader';
import * as types from '../../actions/actionType';

const initialState = {
  imageData: {},
  error: '',
  hasSaved: false
};

describe('Image reducer test', () => {
  it('Should set an image string in the state when passed with SAVE_IMAGE_SUCCESSFUL actionType', () => {
    const action = {
      type: types.SAVE_IMAGE_SUCCESSFUL,
      image: 'some image URL'
    };
    const newState = reducer(initialState, action);
    expect(newState.imageData).toEqual('some image URL');
  });

  it('test for failed image of SAVE_IMAGE_FAILED actionType', () => {
    const action = {
      type: types.SAVE_IMAGE_FAILED,
      error: 'some error message'
    };
    const newState = reducer(initialState, action);
    expect(newState.error).toEqual('some error message');
  });

  it('Should return a default state when no action type is passed', () => {
    const action = {};
    const newState = reducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
  it('should return the default state', () => {
    expect(reducer(undefined, undefined)).toEqual(initialState);
  });
});
