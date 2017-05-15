import EndPointDomain from "../constants/api.js";

class ShelfProductService{
    constructor(){
        this.endpoint =  `${EndPointDomain.url}/api/shelfproduct`;
    }

    getShelfProduct(id, token){
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

    getAllShelfProducts(shelf, token){
        let self = this;
        return fetch(`${self.endpoint}?shelf=${shelf}`,
            {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${token}`
                }
            });
    }

    newShelfProduct(data, token){
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
                    "product": data.product,
                    "facings": data.facings,
                    "shelf": data.shelf
                }
            });
    }

    deleteShelfProduct(id, token){
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

export default ShelfProductService;
