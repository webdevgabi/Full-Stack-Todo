module.exports = (req, res, next) => {

    if(!req.body.id) {
        res.status(404).json({ server: ["Id of the task is not found"] })
        return
    }

    next()

}