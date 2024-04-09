const router = require('express').Router();

const isTasks = require('../../utilities/middleware/isTasks');

router.use(isTasks)

router.get("/", (req, res) => {
    const { tasks } = req.headers.user;

    res.json({tasks: tasks})
})

module.exports = router;