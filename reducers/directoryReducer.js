import * as types from "../actions/actionTypes.js";

export default function directoryReducer(state={directories: ''}, action){
    let ret;
    console.log('directory reducer');
    switch(action.type){
        case types.GET_DIRECTORIES_SUCCESS:
            console.log('SUCCESS DIRECT');
            console.log(action.directories);
            ret = Object.assign({}, state, { directories: action.directories });
            return ret;
            break;
        case types.GET_DIRECTORIES_FAIL:
            ret = Object.assign({}, state, { error: action.error });
            return ret;
            break;
        case types.SET_CURRENT_DIRECTORY:
            ret = Object.assign({}, state, { directory: action.currentDirectory });
            return ret;
            break;
        default:
            return state;
    }
}
