import * as types from "../actions/actionTypes.js";

export default function userReducer(state={}, action){
    console.log("user reducer");
    let ret;
    switch(action.type){
        case types.LOGIN_USER_SUCCESS:
            ret = Object.assign({}, state, {token: action.token});
            return ret;
            break;
        case types.LOGIN_USER_FAIL:
            ret = Object.assign({}, state, {error: action.error});
            console.log("LOGIN_USER_FAIL", ret);
            return ret;
            break;
        case types.REMOVE_USER_ERROR:
            ret = Object.assign({}, state, {error: null});
            console.log("REMOVE_USER_ERROR", ret);
            return ret;
            break;
        case types.SIGN_OUT_USER:
            ret = Object.assign({}, state, {token: null, user: null})
            return ret;
            break;
        case types.GET_USER_SUCCESS:
            console.log('GET_USER_SUCCESS_ACTION');
            console.log(action);
            ret = Object.assign({}, state, {user: action.user});
            return ret;
            break;
        case types.GET_USER_FAIL:
            ret = Object.assign({}, state, {error: action.error});
            return ret;
            break;
        case types.REGISTER_USER_SUCCESS:
            ret = Object.assign({}, state, {user: action.user})
            return ret;
            break;
        case types.REGISTER_USER_FAIL:
            ret = Object.assign({}, state, {error: action.error});
            return ret;
            break;
        default:
            return state;
    }
}
