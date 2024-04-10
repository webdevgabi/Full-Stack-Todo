const find = require("../db/find")

module.exports = async (req, res, next) => {

    if(!req.headers.authorization) {
        res.status(422).json({ server: ["The token is not valid"] })
        return; 
    }

    const user = await find({ collection: 'users', condition: { token: req.headers.authorization } })
    
    if(!user) {
        res.status(422).json({ token: ["The token is not valid"] })
        return;
    }

    req.headers.user = user[0]
    next()

}