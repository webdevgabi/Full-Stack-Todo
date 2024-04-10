const router = require('express').Router();
const { ObjectId } = require('mongodb')

const deleteDB = require("../../utilities/db/delete")
const isId = require('../../utilities/middleware/isId');

router.use(isId)

router.delete("/", async (req, res) => {

    const {id} = req.body;
    const {_id} = req.headers.user;

    const isDeleted = await deleteDB({ 
        collection: "tasks", 
        condition: { _id: new ObjectId(id), ownerID: new ObjectId(_id) } 
    })

    isDeleted ? 
    res.json({ server: ["Task is deleted"] }) :
    res.status(500).json({ server: ["Task is not deleted"] })

})

module.exports = router