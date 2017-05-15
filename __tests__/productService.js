import fetchMock from 'fetch-mock';
import ProductService from '../services/ProductService.js';
import EndPointDomain from '../constants/api.js';

let productService = new ProductService();
let token = 'this.is.a.token';

fetchMock.get(`${EndPointDomain.url}/api/product/100`, {id: 100});
fetchMock.get(`${EndPointDomain.url}/api/product`, {products: [{id: 101, id: 200}]})
fetchMock.post(`${EndPointDomain.url}/api/product`, {id: 102});
fetchMock.delete(`${EndPointDomain.url}/api/product/103`, {id: 103});


describe("Product Service", ()=>{

    test("GET: Product", ()=>{
        productService
            .getProduct(100, token)
            .then((res)=>{
                return res.json();
            })
            .then((shelf)=>{
                expect(shelf.id).toBe(100);
           });
    });

    test("GET: All Products", ()=>{
        productService
            .getAllProducts(100, token)
            .then((res)=>{
                return res.json();
            })
            .then((shelf)=>{
                expect(shelf.id).toBe(100);
            });
    });

    test("POST: Product", ()=>{
        productService
            .newProduct({
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

    test("DELETE: Product", ()=>{
        productService
            .deleteProduct(103, token)
            .then((res)=>{
                return res.json();
            })
            .then((shelf)=>{
                expect(shelf.id).toBe(103);
            });
    });
});
