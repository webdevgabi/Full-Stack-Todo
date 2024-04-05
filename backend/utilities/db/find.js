
module.exports = async ({ collection, data, field }) => {

    try {
        const db = global.db.collection(collection);
        const result = await db.find({ [field]: data }).toArray();
        
        if(result.length > 0){
            return result
        }

        return false
        
    } catch (err) { return false }
    

}