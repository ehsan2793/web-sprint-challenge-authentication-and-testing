const db = require('../../data/dbConfig')
const Us = require('./users-model')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db('users').truncate()
})

afterAll(async () => {
    await db.destroy()
})


it('test env should be set', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

// describe('',() => {

// })