const router = require('express').Router();

const userByEmail = require('../../utilities/middleware/getUserByEmail')
const isPasswordCorrect = require("../../utilities/middleware/isPasswordCorrect")
const update = require('../../utilities/db/update')
const tokenGenerator = require("../../utilities/tokenGenerator")

router.use(userByEmail)
router.use(isPasswordCorrect)

router.post("/", async (req, res) => {

    const { user } = req.headers
    const token = await tokenGenerator();
    
    await update({ collection: 'users', condition: { _id: user._id }, data: { token: token } })
    res.json({ token: [token] })

})

module.exports = router;