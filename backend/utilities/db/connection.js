const { MongoClient } = require("mongodb");

const connectionString = 'mongodb://localhost:27017'

module.exports = async () => {
    const client = await new MongoClient(connectionString).connect()
    const db = client.db('todo');
    global.db = db;
}