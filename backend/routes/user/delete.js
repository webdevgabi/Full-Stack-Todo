

const router = require('express').Router();
const { ObjectId } = require('mongodb')

const deleteDB = require("../../utilities/db/delete")
const getUserByToken = require('../../utilities/middleware/getUserByToken');

router.use(getUserByToken)

router.delete("/", async (req, res) => {

    const {_id} = req.headers.user;

    const isDeleted = await deleteDB({ 
        collection: "users", 
        condition: { _id: new ObjectId(_id) } 
    })

    isDeleted ? 
    res.json({ server: ["User is deleted"] }) :
    res.status(500).json({ server: ["User is not deleted"] })

})

module.exports = router