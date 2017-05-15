import fetchMock from 'fetch-mock';
import DirectoryService from '../services/DirectoryService.js';
import EndPointDomain from '../constants/api.js';

let directoryService = new DirectoryService();
let token = 'this.is.a.token';

fetchMock.get(`${EndPointDomain.url}/api/directory/100`, {id: 100});
fetchMock.get(`${EndPointDomain.url}/api/directory?user_id=100`, {products: [{user_id: 100, user_id: 100}]})
fetchMock.post(`${EndPointDomain.url}/api/directory`, {id: 102});
fetchMock.delete(`${EndPointDomain.url}/api/directory/103`, {id: 103});


describe("Directory Service", ()=>{

    test("GET: Directory", ()=>{
        directoryService
            .getDirectory(100, token)
            .then((res)=>{
                return res.json();
            })
            .then((directory)=>{
                expect(directory.id).toBe(100);
           });
    });

    test("GET: All Directories", ()=>{
        directoryService
            .getAllDirectories(100, token)
            .then((res)=>{
                return res.json();
            })
            .then((directory)=>{
                expect(directory.id).toBe(100);
            });
    });

    test("POST: Directory", ()=>{
        let token = 'this.is.a.token';
        directoryService
            .newDirectory(1, {
                "width" : 48,
                "name" : "condiments",
                "directory_id" : 1
            }, token)
            .then((res)=>{
                return res.json();
            })
            .then((directory)=>{
                expect(directory.id).toBe(100);
            });
    });

    test("DELETE: Directory", ()=>{
        directoryService
            .deleteDirectory(103, token)
            .then((res)=>{
                return res.json();
            })
            .then((directory)=>{
                expect(directory.id).toBe(103);
            });
    });
});
