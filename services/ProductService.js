import EndPointDomain from "../constants/api.js";

class ProductService{
    constructor(){
        this.endpoint =  `${EndPointDomain.url}/api/product`;
    }

    getProduct(id, token){
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

    getAllProducts(token){
        let self = this;
        return fetch(`${self.endpoint}`,
            {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `JWT ${token}`
                }
            });
    }

    newProduct(data, token){
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
                    "name": data.name,
                    "height": data.height,
                    "width": data.width,
                    "depth": data.depth,
                    "description": data.description,
                    "image": data.image
                }
            });
    }

    deleteProduct(id, token){
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

export default ProductService;
