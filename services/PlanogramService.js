import EndPointDomain from "../constants/api.js";

class PlanogramService{
    constructor(){
        this.endpoint =  `${EndPointDomain.url}/api/planogram`;
    }

    getPlanogram(id, token){
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

    getAllPlanograms(userId, token){
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

    newPlanogram(userId, data, token){
        let self = this;
        return fetch(`${self.endpoint}`,
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${token}`
                },
                body: {
                    "user_id" : userId,
                    "width" : data.width,
                    "name" : data.name,
                    "directory_id" : data.directory_id
                }
            });
    }

    deletePlanogram(id, token){
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

export default PlanogramService;
