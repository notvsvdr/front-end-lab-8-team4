import { combineReducers } from 'redux';
import jobList from './job-reducer';
import userList from './user-reducer';

const rootReducer = combineReducers({
    jobList,
    userList
})

export default rootReducer;
