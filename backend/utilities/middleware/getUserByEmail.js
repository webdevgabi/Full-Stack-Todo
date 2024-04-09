const find = require("../db/find")

module.exports = async (req, res, next) => {

    const userByEmail = await find({ collection: 'users', field: 'email', data: req.body.email })
    if(!userByEmail) {
        res.status(422).json({ validation: { email: ["No user found at the email address"] } })
        return;
    }

    req.headers.user = userByEmail[0]
    next()
}