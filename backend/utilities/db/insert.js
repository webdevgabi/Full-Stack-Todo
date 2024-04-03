const { MongoClient } = require('mongodb');

//CONFIG
const connectionString = require('../../config/connectionString')

module.exports = async ({ collection, data }) => {

    try {
        // CONNECT
        const client = await new MongoClient(connectionString).connect();
        const db = client.db('todo').collection(collection);

        // INSERT
        const result = await db.insertOne(data);
        return true;

    } catch (err) { return false }
    

}