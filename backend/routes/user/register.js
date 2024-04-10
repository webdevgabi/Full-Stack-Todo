const router = require('express').Router();

const insert = require("../../utilities/db/insert")
const validation = require("../../utilities/validation")
const userTemplate = require("../../utilities/template/user")

router.use(validation)

router.post("/", async (req, res) => {

    const user = await userTemplate(req.body)
    const isInserted = await insert({ collection: "users", data: user })

    isInserted ? 
    res.json({ server: ["Successful registration"] }) :
    res.status(500).json({ server: ["Unsuccessful registration"] })
    
})


module.exports = router;