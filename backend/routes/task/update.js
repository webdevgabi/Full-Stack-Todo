const { ObjectId } = require('mongodb')
const router = require('express').Router();

const update = require("../../utilities/db/update");
const updateTask = require('../../utilities/template/updateTask');
const isId = require('../../utilities/middleware/isId');

router.use(isId)

router.put("/", async (req, res) => {
    
    const {_id} = req.headers.user;
    const {id} = req.body;

    const isUpdated = await update({ 
        collection: "tasks", 
        condition: { _id: new ObjectId(id), ownerID: new ObjectId(_id) }, 
        data: updateTask(req.body)
    })

    isUpdated ? 
    res.json({ server: ["Task is updated"] }) :
    res.status(500).json({ server: ["Task is not updated"] })
})

module.exports = router;