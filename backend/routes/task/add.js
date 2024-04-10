const router = require('express').Router();

const isProgress = require("../../utilities/middleware/isProgress")
const isPriorityLevel = require("../../utilities/middleware/isPriorityLevel")
const isTitle = require("../../utilities/middleware/isTitle")
const taskTemplate = require("../../utilities/template/task")
const insert = require('../../utilities/db/insert')

router.use(isProgress)
router.use(isPriorityLevel)
router.use(isTitle)

router.put("/", async (req, res) => {

    const { _id } = req.headers.user;
    const isAdded = await insert({collection: "tasks", data: taskTemplate(req.body, _id) })
    
    isAdded ? 
    res.json({ server: ["Task added"] }) :
    res.status(500).json({ server: ["Task has not been added"] })

})

module.exports = router