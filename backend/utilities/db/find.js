const { MongoClient } = require('mongodb');

//CONFIG
const connectionString = require('../../config/connectionString')

module.exports = async ({ collection, data, field }) => {

    try {
        // CONNECT
        const client = await new MongoClient(connectionString).connect();
        const db = client.db('todo').collection(collection);

        // FIND
        const result = await db.find({ [field]: data }).toArray();
        
        if(result.length > 0){
            return true
        }

        return false


    } catch (err) { return false }
    

}