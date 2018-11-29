import { ADD_USER, GET_USER_LIST } from '../actions/actionTypes';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_USER_LIST:
            return { ...state, users: action.payload };
        case ADD_USER:
            return { ...state, users: action.payload };
        default:
            return state;
    }
}