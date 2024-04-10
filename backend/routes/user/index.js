const router = require('express').Router();

const getRoute = require("./get");
router.use('/', getRoute)

const loginRoute = require("./login");
router.use('/login', loginRoute)

const registerRoute = require("./register");
router.use('/register', registerRoute)

const deleteRoute = require("./delete");
router.use('/delete', deleteRoute)

const updateRoute = require("./update");
router.use('/update', updateRoute)

module.exports = router;