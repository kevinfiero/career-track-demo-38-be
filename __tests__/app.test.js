const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('CAREER-TRACK-DEMO-38-BE routes', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });
  afterEach(() => {
    return pool.end();
  });
  it('create a short url via POST', async() => {
    return request(app)
      .post('/api/v1/shorten')
      .send(({ url: 'http://test.com/this/is/very/long' }))
      .then(res => {
        expect(res.body).toEqual({
          id: expect.stringMatching(/^\w{8}$/),
          originalUrl: 'http://test.com/this/is/very/long' 
        });
      });
  });
});
