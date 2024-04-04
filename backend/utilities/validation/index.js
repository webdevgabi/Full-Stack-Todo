
const validation = require("./validation")

module.exports = async (req, res, next) => {
    
    const errors = await validation(req.body)

    if(errors) {
        res.status(422).json(errors)
        return;
    }

    next()
}