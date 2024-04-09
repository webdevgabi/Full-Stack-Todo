
module.exports = (req, res, next) => {

    if(!req.body.title) {
        res.status(422).json({ validation: { title: ["Required to enter title"] } })
        return;
    }

    next()

}