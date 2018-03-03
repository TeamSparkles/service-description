const request = require('supertest');
const express = require('express');
const app = require('./../../../server/index.js');

describe ('App', () => {
  it('should be able to run tests', () => {
    expect(1+2).toBe(3);
  });

  it('It should get success response the GET method', (done) => {
    request(app).get('/api/event/247947838').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});