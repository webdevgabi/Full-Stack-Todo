
module.exports = async ({ collection, data }) => {

    try {
        const db = await global.db.collection(collection);
        await db.insertOne(data);
        return true;

    } catch (err) {
        console.log(err); 
        return false 
    }
    

}