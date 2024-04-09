const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {

    const { user } = req.headers

    const isCorrectPassword = await bcrypt.compare(req.body.password, user.password)
    if(!isCorrectPassword) {
        res.status(422).json({ validation: { password: ["Wrong password"] } })
        return;
    }

    next()

}