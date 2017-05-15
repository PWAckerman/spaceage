import * as types from "./actionTypes.js";
import DirectoryService from "../services/DirectoryService.js";
let directoryService = new DirectoryService();

export function getDirectorySuccess(){

}

export function getDirectoryFailure(){

}

export function addDirectorySuccess(){

}

export function addDirectoryFailure(){

}

export function setCurrentDirectory(currentDirectory){
    console.log('SET CURRENT DIRECTORY');
    console.log(currentDirectory);
    return {type: types.SET_CURRENT_DIRECTORY, currentDirectory}
}

export function getDirectoriesSuccess(directories){
    return {type: types.GET_DIRECTORIES_SUCCESS, directories}
}

export function getDirectoriesFailure(error){
    return {type: types.GET_DIRECTORIES_FAIL, error}
}

export function deleteDirectorySuccess(){

}

export function deleteDirectoryFailure(){

}

export function getDirectory(){

}

export function addDirectory(){

}

export function getDirectories(dispatch, userId, token){
    console.log('directories');
    console.log(userId);
    console.log(token);
    return function(dispatch){
        directoryService
            .getAllDirectories(userId, token)
            .then((res)=>{
                return res.json();
            })
            .then((directories)=>{
                console.log('directories', directories);
                return dispatch(getDirectoriesSuccess(directories.directories));
            })
            .catch((err)=>{
                return dispatch(getDirectoriesFailure(err));
            });
    }
}

export function deleteDirectory(){

}
