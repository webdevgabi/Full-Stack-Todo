const { ObjectId } = require('mongodb')
const router = require('express').Router();

const find = require('../../utilities/db/find')

router.get("/", async (req, res) => {
    
    const { _id } = req.headers.user;
    console.log(_id);
    const isTasks = await find({collection: "tasks", condition: { ownerID: _id } })

    isTasks ? 
    res.json({tasks: isTasks}) :
    res.status(404).json({ server: ["no task"] })
})

module.exports = router;