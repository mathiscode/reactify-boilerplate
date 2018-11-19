/* global describe, it, after */

const supertest = require('supertest')

const server = require('../')

describe('server', () => {
  const request = supertest(server)
  after(done => server.close(done))

  describe('GET /api/users/login', () => {
    it('responds with 200 OK', done => {
      request.get('/api/users/login').expect(200, done)
    })
  })

  describe('GET /api/users/profile', () => {
    it('responds with 401 Unauthorized', done => {
      request.get('/api/users/profile').expect(401, done)
    })
  })
})
