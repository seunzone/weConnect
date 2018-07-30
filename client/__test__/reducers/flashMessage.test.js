import reducer from '../../reducers/flashMessages';
import * as types from '../../actions/actionType';

let initialState = [];
let newState;
let msgId;

describe('Flash message reducer', () => {
  it('Should return default state when no actionType is passed', () => {
    newState = reducer(undefined, undefined);
    expect(newState).toEqual(initialState);
  });

  it('Should set a string in the state when passed with ADD_FLASH_MESSAGE actionType', () => {
    const action = {
      type: types.ADD_FLASH_MESSAGE,
      message: {
        type: 'success',
        text: 'add flash message successful'
      }
    };
    newState = reducer(initialState, action);
    msgId = newState[0].id;
    expect(newState[0].text).toEqual('add flash message successful');
    expect(newState[0].type).toEqual('success');
    initialState = newState;
  });

  it('Should set a string in the state when actionType is DELETE_FLASH_MESSAGE', () => {
    const action = {
      type: types.DELETE_FLASH_MESSAGE,
      id: msgId,
      error: 'some lorem ipsum dolor'
    };
    newState = reducer(initialState, action);
    expect(newState).toEqual([]);
    initialState = newState;
  });

  it('Should set a string for a singleBusiness when passed with actionType of DELETE_FLASH_MESSAGE', () => {
    const action = {
      type: types.DELETE_FLASH_MESSAGE,
      id: 4,
      error: 'hey, boy you are grownded'
    };
    newState = reducer(initialState, action);
    expect(newState).toEqual(initialState);
    initialState = newState;
  });
});
