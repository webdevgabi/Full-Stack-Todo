const router = require('express').Router();

const getUserByToken = require("../../utilities/middleware/getUserByToken")
router.use(getUserByToken)

router.get("/", async (req, res) => {

    const { user } = req.headers;
    console.log(user);
    res.json({ user: user })

})

module.exports = router