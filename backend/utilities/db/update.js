
module.exports = async ({ collection, data, condition }) => {

    try {
        const db = global.db.collection(collection);
        await db.updateOne(condition, { $set: data });
        return true;

    } catch (err) { return false }
    

}