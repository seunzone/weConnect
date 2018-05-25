import axios from 'axios';

import {
    SAVE_IMAGE_SUCCESSFUL,
    SAVE_IMAGE_FAILED
} from './actionType';

export function saveImageSuccessful(image) {
    return {
        type: SAVE_IMAGE_SUCCESSFUL,
        image
    };
}

export function saveImageFailed(error) {
    return {
        type: SAVE_IMAGE_FAILED,
        error
    };
}

export function saveImageCloudinary(image) {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'yp3s3k5n');
    delete axios.defaults.headers.common.Authorization;
    return dispatch => axios.post('https://api.cloudinary.com/v1_1/dtlziutcq/image/upload', data)
        .then(({ data }) => {
            const token = localStorage.getItem('makeToken');
            //console.log(token);
            axios.defaults.headers.common.Authorization = token;
            //console.log(data.secure_url);
            dispatch(saveImageSuccessful(data.secure_url));
        }).catch(() => {
            dispatch(saveImageFailed('Sorry, your image failed to upload'));
        });
}
