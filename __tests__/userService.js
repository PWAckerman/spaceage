import fetchMock from 'fetch-mock';
import UserService from '../services/UserService.js';
import EndPointDomain from '../constants/api.js';

let userService = new UserService();
userService.setToken('this.is.a.token');

fetchMock.get(`${EndPointDomain.url}/api/user/100`, {id: 100});
fetchMock.post(`${EndPointDomain.url}/api/user`, {id: 102});
fetchMock.post(`${EndPointDomain.url}/auth`, {access_token: 'this.is.a.token'});

describe("User Service", ()=>{
    test("GET: User", ()=>{
        userService
            .getUser(100)
            .then((res)=>{
                return res.json();
            })
            .then((user)=>{
                expect(user.id).toBe(100);
            });
    });

    test("POST: User", ()=>{
        userService
            .newUser({})
            .then((res)=>{
                return res.json();
            })
            .then((user)=>{
                expect(user.id).toBe(100);
            });
    });

    test("POST: Login", ()=>{
        userService
            .loginUser({})
            .then((res)=> res.json())
            .then((token)=>{
                expect(token).toNotBeNull();
                expect(token.access_token).toMatch(/this.is.a.token/);
            });
    });
});
