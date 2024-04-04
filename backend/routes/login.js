const express = require('express');
const bcrypt = require('bcrypt')

// UTILITIES - DB
const find = require('../utilities/db/find')
const update = require('../utilities/db/update')

// UTILITIES
const tokenGenerator = require("../utilities/tokenGenerator")

const router = express.Router();
router.post("/", async (req, res) => {

    const userByEmail = await find({ collection: 'users', field: 'email', data: req.body.email })
    if(!userByEmail) {
        res.status(422).json({ validation: { email: ["No user found at the email address"] } })
        return;
    }

    const isCorrectPassword = await bcrypt.compare(req.body.password, userByEmail[0].password)
    if(!isCorrectPassword) {
        res.status(422).json({ validation: { password: ["Wrong password"] } })
        return;
    }

    const token = await tokenGenerator();
    await update({ collection: 'users', condition: { _id: userByEmail[0]._id }, data: { token: token } })
    res.json({ token: [token] })

})

module.exports = router;