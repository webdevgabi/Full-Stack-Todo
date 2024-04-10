
module.exports = async ({ collection, condition }) => {

    try {
        const db = global.db.collection(collection);
        const isDeleted = await db.deleteOne(condition);
        
        if(isDeleted.deletedCount === 0){
            return false
        }

        return true
        
    } catch (err) { return false }
    

}