// import { BUSINESS_DELETE_FAILED, 
//          BUSINESS_DELETE_SUCCESSFUL 
// } from '../actions/actionType';

// const initialState = {
//     isDeleted: false,
//     hasError: false,
//     message: '',
//     error: ''
// }

// export default (state = initialState, action = {}) => {
//     switch (action.type) {
//         case BUSINESS_DELETE_FAILED:
//             return {
//                 isDeleted: false,
//                 hasError: true,
//                 message: '',
//                 error: action.err
//             };
//         case BUSINESS_DELETE_SUCCESSFUL:
//             return {
//                 isDeleted: true,
//                 hasError: false,
//                 message: action.message,
//                 error: ''
//             };
//             default: return state;
//     }
// }
import {
    DELETE_BUSINESS
   } from '../actions/actionType';
   
   export default (state = [], action = {}) => {
    switch (action.type) {
        case DELETE_BUSINESS:
        return state.filter(business => business.id !== action.businessId);
      default: return state;
    }
   };