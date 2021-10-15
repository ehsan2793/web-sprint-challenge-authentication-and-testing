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

describe('getAll users model function', () => {

    beforeEach(async () => {
        await db('users').insert({ username: 'ehsan', password: '1234' })
    })
    it('getAll shoud return at leat have one user', async () => {
        const users = await Us.getAll()
        expect(users).toHaveLength(1)
    })
})


describe('getById users model function', () => {
    let id
    beforeEach(async () => {
        id = await db('users').insert({ username: 'ehsan', password: '1234' })
    })
    it('getById shoud return user with specified id', async () => {
        const user = await Us.getById(id)
        expect(user).toMatchObject({ username: 'ehsan', password: '1234' })
    })
})

