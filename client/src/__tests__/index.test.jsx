const request = require('supertest');
const app = require('./../../../server/index.js')


describe ('App', () => {
  it('should be able to run tests', () => {
    expect(1+2).toBe(3);
  })
})

describe('Client to Server Connection', () => {
    test('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
})



