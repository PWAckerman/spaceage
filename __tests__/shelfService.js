import fetchMock from 'fetch-mock';
import ShelfService from '../services/ShelfService.js';
import EndPointDomain from '../constants/api.js';

let shelfService = new ShelfService();
let token = 'this.is.a.token';

fetchMock.get(`${EndPointDomain.url}/api/shelf/100`, {id: 100});
fetchMock.get(`${EndPointDomain.url}/api/shelf?planogram=100`, { shelves: [{planogram_id: 100}] });
fetchMock.post(`${EndPointDomain.url}/api/shelf`, {id: 102});
fetchMock.delete(`${EndPointDomain.url}/api/shelf/103`, {id: 103});


describe("Shelf Service", ()=>{

    test("GET: Shelf", ()=>{
        shelfService
            .getShelf(100, token)
            .then((res)=>{
                return res.json();
            })
            .then((shelf)=>{
                expect(shelf.id).toBe(100);
           });
    });

    test("GET: All Shelves", ()=>{
        shelfService
            .getAllShelves(100, token)
            .then((res)=>{
                return res.json();
            })
            .then((shelf)=>{
                expect(shelf.id).toBe(100);
            });
    });

    test("POST: Shelf", ()=>{
        shelfService
            .newShelf({
                index: 1,
                height: 40,
                planogram: 2,
                directory: 5
            }, token)
            .then((res)=>{
                return res.json();
            })
            .then((shelf)=>{
                expect(shelf.id).toBe(100);
            });
    });

    test("DELETE: Shelf", ()=>{
        shelfService
            .deleteShelf(103, token)
            .then((res)=>{
                return res.json();
            })
            .then((shelf)=>{
                expect(shelf.id).toBe(103);
            });
    });
});
