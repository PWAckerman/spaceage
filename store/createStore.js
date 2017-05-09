import {createStore, applyMiddleware} from "redux";
// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

export default function configureStore(initialState={}){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    );
}
