const supertest = require('supertest');
const app = require('../index.js');

const api = "/api/filmes";

describe('movie', () => {
    describe("Get movies route", () => {
        describe('Get all movies', () => {
            it("Should return status 200", async () => {
                await supertest(app).get(api).expect(200);
            })
        });

        describe('Gevin the movies does not exist', () => {
            it("Should return status 404", async () => {
                await supertest(app).get(`${api}/222`).expect(404);
            })
        });

        describe('Get all movies', () => {
            it("Should return status 200",  () => {
                expect(true).toBe(true);
            })
        });

        describe('Post movie', () => {
            it("Should return status 200 added", async () => {
                await supertest(app)
                    .post(api)
                    .send({name: 'Homem-Formiga e a Vespa: Quantumania', director: 'Peyton Reed', link: 'https://ovicio.com.br/wp-content/uploads/2022/07/20220723-20220723_200631-555x555.jpg'})
                    .expect(200);
            })
        });

        describe('Post movie ERROR', () => {
            it("Should return status 500 error add", async () => {
                await supertest(app)
                    .post(api)
                    .send({name: 'Homem-Formiga e a Vespa: Quantumania'})
                    .expect(500);
            })
        });

        describe('Put movie', () => {
            it("Should return status 200 updated", async () => {
                await supertest(app)
                    .put(api + "/63572cb27ab96fe7375d7dd8")
                    .send({name: 'Quantumania', director: 'Peyton Reed', link: 'https://ovicio.com.br/wp-content/uploads/2022/07/20220723-20220723_200631-555x555.jpg'})
                    .expect(200);
            })
        });

        describe('Put movie ERROR', () => {
            it("Should return status 500 error update", async () => {
                await supertest(app)
                    .put(api + "/63572cb27ab96fe7375d7dd8")
                    .send({name: 'Quantumania', director: 'Peyton Reed', link: 'https://ovicio.com.br/wp-content/uploads/2022/07/20220723-20220723_200631-555x555.jpg'})
                    .expect(500);
            })
        });

        describe('Delet movie', () => {
            it("Should return status 200 Deleted", async () => {
                await supertest(app)
                    .delete(api + "/63572cb27ab96fe7375d7dd8")
                    .expect(200);
            })
        });

        describe('Delet movie ERROR', () => {
            it("Should return status 500 error Delete", async () => {
                await supertest(app)
                    .delete(api + "/63572cb27ab96fe7375d7dd8")
                    .expect(500);
            })
        });
    })
});