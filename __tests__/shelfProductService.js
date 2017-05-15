import fetchMock from 'fetch-mock';
import ShelfProductService from '../services/ShelfProductService.js';
import EndPointDomain from '../constants/api.js';

let shelfProductService = new ShelfProductService();
let token = 'this.is.a.token';

fetchMock.get(`${EndPointDomain.url}/api/shelfproduct/100`, {id: 100});
fetchMock.get(`${EndPointDomain.url}/api/shelfproduct?shelf=100`, { shelf_products: [{shelf_id: 100}] });
fetchMock.post(`${EndPointDomain.url}/api/shelfproduct`, {id: 102});
fetchMock.delete(`${EndPointDomain.url}/api/shelfproduct/103`, {id: 103});


describe("Shelf Product Service", ()=>{

    test("GET: ShelfProduct", ()=>{
        shelfProductService
            .getShelfProduct(100, token)
            .then((res)=>{
                return res.json();
            })
            .then((shelf)=>{
                expect(shelf.id).toBe(100);
           });
    });

    test("GET: All ShelfProducts", ()=>{
        shelfProductService
            .getAllShelfProducts(100, token)
            .then((res)=>{
                return res.json();
            })
            .then((shelf)=>{
                expect(shelf.id).toBe(100);
            });
    });

    test("POST: ShelfProduct", ()=>{
        shelfProductService
            .newShelfProduct({
                "product": 1,
                "facings": 2,
                "shelf": 3
            }, token)
            .then((res)=>{
                return res.json();
            })
            .then((shelf)=>{
                expect(shelf.id).toBe(100);
            });
    });

    test("DELETE: ShelfProduct", ()=>{
        shelfProductService
            .deleteShelfProduct(103, token)
            .then((res)=>{
                return res.json();
            })
            .then((shelf)=>{
                expect(shelf.id).toBe(103);
            });
    });
});
