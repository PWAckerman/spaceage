import EndPointDomain from "../constants/api.js";

class UserService{
    constructor(){
        this.endpoint =  `${EndPointDomain.url}/api/user`;
    }

    getUser(id){
        let self = this;
        console.log(`${this.endpoint}`);
        return fetch(`${self.endpoint}`,
            {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${self.token}`
                }
            });
    }

    setToken(token){
        this.token = token;
    }

    setUser(user){
        this.user = user;
    }

    newUser(data){
        let self = this;
        return fetch(`${self.endpoint}`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
    }

    loginUser(data){
        let self = this;
        console.log("loginUser", `${EndPointDomain.url}/auth`);
        return fetch(`${EndPointDomain.url}/auth`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    }
}

export default UserService;
