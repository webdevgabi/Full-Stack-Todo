const { MongoClient } = require('mongodb');

//CONFIG
const connectionString = require('../../config/connectionString')

module.exports = async ({ collection, data, condition }) => {

    try {
        // CONNECT
        const client = await new MongoClient(connectionString).connect();
        const db = client.db('todo').collection(collection);

        // UPDATE
        const result = await db.updateOne(condition, { $set: data });
        return true;

    } catch (err) { return false }
    

}