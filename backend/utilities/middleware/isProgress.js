module.exports = (req, res, next) => {

    if(!req.body.progress) {
        req.body.progress = "Not Started"
    }

    next()

}