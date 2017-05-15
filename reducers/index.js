import { combineReducers } from "redux";
import user from "./userReducer.js";
import directory from './directoryReducer.js';
import planogram from './planogramReducer.js';

const rootReducer = combineReducers({
    user,
    directory,
    planogram
});

export default rootReducer;
