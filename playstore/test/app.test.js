const app = require('../app');
const expect = require('chai').expect;
const supertest = require('supertest');

describe('GET /apps endpoint', () => {
  it('should return an array of apps', () => {
    return supertest(app)
      .get('/apps')
      .expect(200)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body).to.be.an('array');
      });
  });
});