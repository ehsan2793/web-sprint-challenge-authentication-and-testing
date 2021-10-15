// Write your tests here
const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');
const bcrypt = require('bcryptjs');

test('sanity', () => {
  expect(true).toBe(true);
});





describe('server.js', () => {
  describe('[Get] /api/jokes', () => {
    it('return error "token required" when no token is provided', async () => {
      const res = await request(server).get('/api/jokes');
      expect(res.body.message).toBe('token required');
    });
    it('return error "invalid token" wrong token is given', async () => {
      const res = await request(server).get('/api/jokes').set('Authorization', 'abcdefg')
      expect(res.body.message).toBe("invalid token")
    });
  });

  describe('[Post]', () => {
    it.todo('create a new user in the data base')

  })

});
