import EndPointDomain from "../constants/api.js";

class ShelfService{
    constructor(){
        this.endpoint =  `${EndPointDomain.url}/api/shelf`;
    }

    getShelf(id, token){
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

    getAllShelves(planogramId, token){
        let self = this;
        console.log(`${self.endpoint}?planogram=${planogramId}`);
        return fetch(`${self.endpoint}?planogram=${planogramId}`,
            {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${token}`
                }
            });
    }

    newShelf(data, token){
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
                    "planogram": data.planogram,
                    "height": data.height,
                    "directory": data.directory,
                    "index": data.index
                }
            });
    }

    deleteShelf(id, token){
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

export default ShelfService;
