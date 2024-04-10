const router = require('express').Router();

const getUserByToken = require("../../utilities/middleware/getUserByToken")

router.use(getUserByToken)

const addRoute = require("./add");
router.use('/add', addRoute)

const getRoute = require("./get");
router.use('/', getRoute)

const updateRoute = require("./update");
router.use('/update', updateRoute)

const deleteRoute = require("./delete");
router.use('/delete', deleteRoute)

module.exports = router;