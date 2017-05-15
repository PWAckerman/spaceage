import fetchMock from 'fetch-mock';
import PlanogramService from '../services/PlanogramService.js';
import EndPointDomain from '../constants/api.js';

let planogramService = new PlanogramService();
let token = 'this.is.a.token';

fetchMock.get(`${EndPointDomain.url}/api/planogram/100`, {id: 100});
fetchMock.get(`${EndPointDomain.url}/api/planogram?user_id=100`, {products: [{user_id: 100, user_id: 100}]})
fetchMock.post(`${EndPointDomain.url}/api/planogram`, {id: 102});
fetchMock.delete(`${EndPointDomain.url}/api/planogram/103`, {id: 103});


describe("Planogram Service", ()=>{

    test("GET: Planogram", ()=>{
        planogramService
            .getPlanogram(100, token)
            .then((res)=>{
                return res.json();
            })
            .then((planogram)=>{
                expect(planogram.id).toBe(100);
           });
    });

    test("GET: All Planograms", ()=>{
        planogramService
            .getAllPlanograms(100, token)
            .then((res)=>{
                return res.json();
            })
            .then((planogram)=>{
                expect(planogram.id).toBe(100);
            });
    });

    test("POST: Planogram", ()=>{
        let token = 'this.is.a.token';
        planogramService
            .newPlanogram(1, {
                "width" : 48,
                "name" : "condiments",
                "directory_id" : 1
            }, token)
            .then((res)=>{
                return res.json();
            })
            .then((planogram)=>{
                expect(planogram.id).toBe(100);
            });
    });

    test("DELETE: Planogram", ()=>{
        planogramService
            .deletePlanogram(103, token)
            .then((res)=>{
                return res.json();
            })
            .then((planogram)=>{
                expect(planogram.id).toBe(103);
            });
    });
});
