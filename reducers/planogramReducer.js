import * as types from "../actions/actionTypes.js";

export default function planogramReducer(state={}, action){
    let ret;
    console.log("PLANOGRAM_ACTION", action);
    switch(action.type){
        case types.GET_PLANOGRAMS_SUCCESS:
            console.log('GET_PLANOGRAMS_SUCCESS', action);
            ret = Object.assign({}, state, { planograms: action.planograms });
            return ret;
            break;
        case types.GET_PLANOGRAMS_FAIL:
            ret = Object.assign({}, state, { error: action.error });
            return ret;
            break;
        default:
            return state;
    }
}
