import { combineReducers } from "redux";
import user from "./userReducer.js";

const rootReducer = combineReducers({
    user
});

export default rootReducer;
