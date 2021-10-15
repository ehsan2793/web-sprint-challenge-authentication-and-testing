const db = require('../../data/dbConfig');

const getAll = () => {
    return db('users')
};
const getById = async (id) => {
    const singleUser = await db('users').where('id', id).first();
    return singleUser
};
const insert = async (user) => {

    return "hello"
};

module.exports = {
    getAll,
    getById,
    insert,
};
