import EndPointDomain from "../constants/api.js";

class DirectoryService{
    constructor(){
        this.endpoint =  `${EndPointDomain.url}/api/directory`;
    }

    getDirectory(id, token){
        let self = this;
        console.log(`${self.endpoint}/${id}`);
        return fetch(`${self.endpoint}/${id}`,
            {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${token}`
                }
            });
    }

    getAllDirectories(userId, token){
        let self = this;
        return fetch(`${self.endpoint}?user_id=${userId}`,
            {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${token}`
                }
            });
    }

    newDirectory(userId, name, token){
        let self = this;
        return fetch(`${self.endpoint}`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `JWT ${token}`
            },
            body: {
                "user_id" : userId,
                "name" : name
            }
        });
    }

    deleteDirectory(id, token){
        let self = this;
        return fetch(`${self.endpoint}/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${token}`
                }
            });
    }
}

export default DirectoryService;
