const router = require('express').Router();

const update = require("../../utilities/db/update")
const updateUser = require("../../utilities/template/updateUser")
const validation = require("../../utilities/validation/validation")
const getUserByToken = require("../../utilities/middleware/getUserByToken")

router.use(async (req, res, next) => {
    
    const errors = await validation(req.body, false)

    if(errors) {
        res.status(422).json(errors)
        return;
    }

    next()
})

router.use(getUserByToken)

router.put("/", async (req, res) => {

    const {_id} = req.headers.user;
    const isUpdated = await update({ collection: "users", data: await updateUser(req.body), condition: { _id: _id } })

    isUpdated ? 
    res.json({ server: ["User is updated"] }) :
    res.status(500).json({ server: ["User is not updated"] })

})

module.exports = router