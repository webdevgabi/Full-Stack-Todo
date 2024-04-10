const router = require('express').Router();

const getUserByToken = require("../../utilities/middleware/getUserByToken")

router.use(getUserByToken)

const addRoute = require("./add");
router.use('/add', addRoute)

const listRoute = require("./list");
router.use('/list', listRoute)

const updateRoute = require("./update");
router.use('/update', updateRoute)

module.exports = router;