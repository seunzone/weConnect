import { SAVE_IMAGE_SUCCESSFUL, SAVE_IMAGE_FAILED } from '../actions/actionType';

const initialState = {
    imageData: {},
    error:'',
    hasSaved: false
};

export default (state=initialState, action={}) => {
    switch(action.type){
        case SAVE_IMAGE_SUCCESSFUL:
        return {
            imageData: action.image,
            error: '',
            hasSaved: true
        };
        case SAVE_IMAGE_FAILED:
        return {
            imageData: {},
            error: action.error,
            hasSaved: false
        };
        default: return state;
    }
}