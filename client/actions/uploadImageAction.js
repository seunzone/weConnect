import axios from 'axios';

import {
  SAVE_IMAGE_SUCCESSFUL,
  SAVE_IMAGE_FAILED
} from './actionType';
/**
 * @description - Add Image to Cloudinary
 * @export { Function } - Add image to store
 * @param {*} image
 * @returns { Business } - Action
 */
export function saveImageSuccessful(image) {
  return {
    type: SAVE_IMAGE_SUCCESSFUL,
    image
  };
}
/**
 * @description - Get error from Image Upload
 * @export { Function }
 * @param {*} error
 * @returns { Business } - Action
 */
export function saveImageFailed(error) {
  return {
    type: SAVE_IMAGE_FAILED,
    error
  };
}
/**
 * @description action to update a particular user image to cloudinary
 * @param {object} image - contains details of the user
 * @returns {object} success/failed image update
 */
export function saveImageCloudinary(image) {
  const data = new FormData();
  data.append('file', image);
  data.append('upload_preset', process.env.CLOUDINARY_PRESET);
  delete axios.defaults.headers.common.Authorization;
  return dispatch => axios.post(process.env.CLOUDINARY_URL, data)
    .then(({ data }) => {
      const token = localStorage.getItem('makeToken');
      axios.defaults.headers.common.Authorization = token;
      dispatch(saveImageSuccessful(data.secure_url));
    }).catch(() => {
      dispatch(saveImageFailed('Sorry, your image failed to upload'));
    });
}
