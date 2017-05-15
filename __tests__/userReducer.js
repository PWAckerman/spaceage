import userReducer from '../reducers/userReducer.js';
import * as types from '../actions/actionTypes.js';

let tokenAction = {
    type: types.LOGIN_USER_SUCCESS, token: 'this.is.a.token'
};

let errorAction = {
    type: types.LOGIN_USER_FAIL, error: 'this.is.an.error'
};

let errorRemoveAction = {
    type: types.REMOVE_USER_ERROR
};

let userAction = {
    type: types.GET_USER_SUCCESS, user: 'this.is.a.user'
};

let userErrorAction = {
    type: types.GET_USER_FAIL, error: 'this.is.an.error'
};

let registerAction = {
    type: types.REGISTER_USER_SUCCESS, user: 'this.is.a.user'
}

let registerErrorAction = {
    type: types.REGISTER_USER_FAIL, error: 'this.is.an.error'
}

let signOutAction = {
    type: types.SIGN_OUT_USER
}

describe('userReducer', ()=>{
    test('LOGIN: should add token to state when successful', ()=>{
        let result = userReducer({}, tokenAction);
        expect(result).toMatchObject({token: 'this.is.a.token'});
        expect(result.token).toMatch(/this.is.a.token/);
    });

    test('LOGIN: should return an error instead of a token on failure', ()=>{
        let result = userReducer({}, errorAction);
        expect(result).toMatchObject({error: 'this.is.an.error'});
        expect(result.error).toMatch(/this.is.an.error/);
    });

    test("REMOVE: should remove error from state", ()=>{
        let result = userReducer({error: 'this.is.an.error'}, errorRemoveAction);
        expect(result).toMatchObject({error: null});
        expect(result.error).toBeNull();
    })

    test('GET: should add user to state when successful', ()=>{
        let result = userReducer({}, userAction);
        expect(result).toMatchObject({user: 'this.is.a.user'});
        expect(result.user).toMatch(/this.is.a.user/);
    });

    test('GET: should return an error instead of a user on failure', ()=>{
        let result = userReducer({}, userErrorAction);
        expect(result).toMatchObject({error: 'this.is.an.error'});
        expect(result.error).toMatch(/this.is.an.error/);
    });

    test('REGISTER: should return a user on success', ()=>{
        let result = userReducer({}, registerAction);
        expect(result).toMatchObject({user: 'this.is.a.user'});
        expect(result.user).toMatch(/this.is.a.user/);
    });

    test('REGISTER: should return an error instead of a user on failure', ()=>{
        let result = userReducer({}, registerErrorAction);
        expect(result).toMatchObject({error: 'this.is.an.error'});
        expect(result.error).toMatch(/this.is.an.error/);
    });

    test('SIGNOUT: should remove token from state', ()=>{
        let result = userReducer({token: "this.is.a.token"}, signOutAction);
        expect(result).toMatchObject({token: null, user: null });
        expect(result.token).toBeNull();
        expect(result.user).toBeNull();
    })

});
