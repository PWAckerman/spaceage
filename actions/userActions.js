import * as types from "./actionTypes.js";
import UserService from "../services/UserService.js";
const userService = new UserService();

export function loginUserSuccess(token){
    console.log("token", token);
    return {
        type: types.LOGIN_USER_SUCCESS, token
    };
}

export function loginUserFailure(error){
    console.log("error", error);
    return {
        type: types.LOGIN_USER_FAIL, error
    };
}

export function loginUser(dispatch, userInfo){
    console.log(dispatch, userInfo);
    return function(dispatch){
        let res = userService.loginUser(userInfo);
        console.log(res);
        res.error ? dispatch(loginUserFailure(res.error)) : dispatch(loginUserSuccess(res.access_token));

    };
}
