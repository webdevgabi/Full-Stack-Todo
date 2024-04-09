module.exports = (req, res, next) => {

    if(!req.body.priorityLevel) {
        req.body.priorityLevel = 1
    }

    next()

}