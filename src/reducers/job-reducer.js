import { GET_JOB_LIST, ADD_JOB } from "../actions/actionTypes";


export default function (state = {}, action) {
    switch (action.type) {
        case GET_JOB_LIST:
            return { ...state, jobList: action.jobs };
        case ADD_JOB:
            return { ...state, jobList: action.jobs };
        default:
            return state;
    }
}
