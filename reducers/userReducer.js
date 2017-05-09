import * as types from "../actions/actionTypes.js";

export default function userReducer(state={}, action){
    console.log("user reducer");
    let ret;
    switch(action.type){
        case types.LOGIN_USER_SUCCESS:
            ret = Object.assign({}, state, {token: action.token})
            console.log("GET_USER_SUCCESS", ret);
            return ret;
            break;
        case types.LOGIN_USER_FAIL:
            ret = Object.assign({}, state, {error: action.error})
            console.log("LOGIN_USER_FAIL", ret);
            return ret;
            break;
        default:
            return state;
    }
}
