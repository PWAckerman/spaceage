import * as types from "./actionTypes.js";
import ShelfProductService from "../services/ShelfProductService.js";
let ShelfProductService = new ShelfProductService();


export function getShelfProductSuccess(shelfProduct){
    return {
        type: types.GET_SHELF_PRODUCT_SUCCESS, shelfProduct
    }
}

export function getShelfProductFailure(error){
    return {
        type: types.GET_SHELF_PRODUCT_FAILURE, error
    }
}

export function addShelfProductSuccess(shelfProduct){
    return {
        type: types.ADD_SHELF_PRODUCT_SUCCESS, shelfProduct
    }
}

export function addShelfProductFailure(error){
    return {
        type: types.ADD_SHELF_PRODUCT_FAIL, error
    }
}

export function getAllShelfProductsSuccess(shelfProducts){
    return {
        type: types.GET_SHELF_PRODUCTS_SUCCESS, shelfProducts
    }
}

export function getAllShelfProductsFailure(error){
    return {
        type: types.GET_SHELF_PRODUCTS_FAIL, error
    }
}

export function deleteShelfProductSuccess(shelfProduct){
    return {
        type: types.DELETE_SHELF_PRODUCT_SUCCESS, deletedProduct: shelfProduct
    }
}

export function deleteShelfProductFailure(error){
    return {
        type: types.DELETE_SHELF_PRODUCT_FAIL, error
    }
}

export function getShelfProduct(dispatch, id, token){
    return function(dispatch){
        shelfProductService.getShelfProduct(id, token)
            .then((res)=> res.json())
            .then((shelfProduct)=>{
                if(shelfProduct.error){
                    return dispatch(getShelfProductFailure(shelfProduct))
                }
                return dispatch(getShelfProductSuccess(shelfProduct))
            })
            .catch((err)=>{
                return dispatch(getShelfProductFailure(err));
            });
    }
}

export function addShelfProduct(dispatch, data, token){
    return function(dispatch){
        shelfProductService.newShelfProduct(data, token)
            .then((res)=> res.json())
            .then((shelfProduct)=>{
                if(shelfProduct.error){
                    return dispatch(addShelfProductFailure(shelfProduct))
                }
                return dispatch(addShelfProductSuccess(shelfProduct))
            })
    }
}

export function deleteShelfProduct(dispatch, id, token){
    return function(dispatch){
        shelfProductService.deleteShelfProduct(id, token)
            .then((res)=> res.json())
            .then((shelfProduct)=>{
                if(shelfProduct.error){
                    return dispatch(deleteShelfProductFailure(shelfProduct))
                }
                return dispatch(deleteShelfProductSuccess(shelfProduct))
            })
            .catch((err)=>{
                return dispatch(deleteShelfProductFailure(err));
            })
    }
}

export function getAllShelfProducts(dispatch, shelf, token){
    return function(dispatch){
        shelfProductService.getAllShelfProducts(shelf, token)
            .then((res)=> res.json())
            .then((shelfProducts)=>{
                if(shelfProducts.error){
                    return dispatch(getAllShelfProductsFailure(shelfProducts))
                }
                return dispatch(getAllShelfProductsSuccess(shelfProducts))
            })
            .catch((err)=>{
                return dispatch(getAllShelfProductsFailure(err));
            })
    }
}
