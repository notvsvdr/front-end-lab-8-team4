import { GET_JOB_LIST } from './actionTypes';


export function jobList() {
    return dispatch => {
        dispatch({
            type: GET_JOB_LIST,
            jobs: { jobs: "asdsafsa" }
        });
    };
}
