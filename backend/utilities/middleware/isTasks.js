
module.exports = (req, res, next) => {
    const { tasks } = req.headers.user;

    if(tasks.length === 0){
        res.status(404).json({ tasks: ["No task created"] })
        return
    }

    next()
}