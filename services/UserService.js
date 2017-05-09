import EndPointDomain from "../constants/api.js";

class UserService{
    getUser(id){
        let self = this;
        if(!self.user){
            console.log(`${EndPointDomain}/api/user/${id}`);
            return fetch(`${EndPointDomain}/api/user/${id}`,
                {
                    method: "GET",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": `JWT ${self.token}`
                    }
                }).then((res)=>{
                    console.log("res", res);
                    return res.json()
                }).then((user)=>{
                    self.user = user;
                    return user;
                }).catch((err)=>{
                    return err;
                })
        } else {
            return self.user;
        }
    }

    newUser(data){
        return fetch(`${EndPointDomain}/api/user`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((res)=>{
            console.log("res", res);
            return res.json();
        }).then((userId)=>{
            return userId;
        }).catch((err)=>{
            return err;
        })
    }

    loginUser(data){
        let self = this;
        console.log("loginUser");
        return fetch(`${EndPointDomain}/auth`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((res)=>{
            console.log("res", res);
            return res.json();
        }).then((token)=>{
            self.token = token.access_token;
            return token;
        }).catch((err)=>{
            console.log("err", err);
            return err;
        })
    }
}

export default UserService;
