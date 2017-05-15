import * as types from "./actionTypes.js";
import PlanogramService from "../services/PlanogramService.js";
let planogramService = new PlanogramService();

export function getPlanogramSuccess(){

}

export function getPlanogramFailure(err){

}

export function addPlanogramSuccess(){

}

export function addPlanogramFailure(){

}

export function getPlanogramsSuccess(planograms){
    return {type: types.GET_PLANOGRAMS_SUCCESS, planograms}
}

export function getPlanogramsFailure(err){
    return {type: types.GET_PLANOGRAMS_FAIL, err}
}

export function deletePlanogramSuccess(){

}

export function deletePlanogramFailure(){

}

export function getPlanogram(){

}

export function addPlanogram(){

}

export function getPlanograms(dispatch, userId, token){
    console.log('planograms');
    console.log(userId);
    console.log(token);
    return function(dispatch){
        planogramService
            .getAllPlanograms(userId, token)
            .then((res)=>{
                return res.json();
            })
            .then((planograms)=>{
                console.log('planograms as result', planograms);
                return dispatch(getPlanogramsSuccess(planograms.planograms));
            })
            .catch((err)=>{
                return dispatch(getPlanogramsFailure(err));
            });
    }
}

export function deletePlanogram(){

}
