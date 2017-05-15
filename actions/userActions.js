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

export function removeUserError(){
    return {
        type: types.REMOVE_USER_ERROR
    }
}

export function getUserSuccess(user){
    console.log("GET_USER_SUCCESS");
    console.log(user);
    return {
        type: types.GET_USER_SUCCESS, user
    };
}

export function getUserFailure(error){
    console.log("get_user_fail", error);
    return {
        type: types.GET_USER_FAIL, error
    };
}

export function registerUserSuccess(user){
    return {
        type: types.REGISTER_USER_SUCCESS, user
    }
}

export function registerUserFailure(error){
    return {
        type: types.REGISTER_USER_FAIL, error
    }
}

export function signOutUser(){
    return {
        type: types.SIGN_OUT_USER
    }
}

export function registerUser(dispatch, userInfo){
    return function(dispatch){
        userService.newUser(userInfo)
            .then((res)=>{
                return res.json();
            })
            .then((userInfo)=>{
                return userInfo.error? dispatch(registerUserFailure(userInfo)) : dispatch(registerUserSuccess(userInfo))
            })
            .catch((err)=>{
                return dispatch(registerUserFailure(err));
            });
    };
}

export function loginUser(dispatch, userInfo){
    return function(dispatch){
        userService.loginUser(userInfo)
            .then((res)=>{
                console.log("res", res);
                return res.json();
            })
            .then((token)=>{
                if(token.error){
                    return dispatch(loginUserFailure(token));
                }
                userService.setToken(token.access_token);
                return dispatch(loginUserSuccess(token.access_token));
            })
            .catch((err)=>{
                console.log("err", err);
                return dispatch(loginUserFailure(err));
            });
    };
}

export function getUser(dispatch, userId){
    return function(dispatch){
        userService.getUser(userId)
            .then((res)=>{
                return res.json();
            })
            .then((user)=>{
                userService.setUser(user)
                return dispatch(getUserSuccess(user));
            })
            .catch((err)=>{
                return dispatch(getUserFailure(err));
            });
    };
}
