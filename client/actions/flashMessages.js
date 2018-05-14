import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './actionType';

/**
 * @return { object } add-flash-message
 * @param { * } message
 *
*/
export function addFlashMessage(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  };
}

/**
 * @return { object } delete-flash-message
 * @param { * } id
 *
*/
export function deleteFlashMessage(id) {
  return {
    type: DELETE_FLASH_MESSAGE,
    id
  };
}
