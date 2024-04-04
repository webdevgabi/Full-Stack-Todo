const express = require('express');
const bcrypt = require('bcrypt');

// UTILITIES
const insert = require("../utilities/db/insert")
const validation = require("../utilities/validation")

const router = express.Router();

router.use(validation)

router.post("/", async (req, res) => {

    req.body.password = await bcrypt.hash(req.body.password, 10);

    const isInserted = await insert({ collection: "users", data: req.body })

    isInserted ? 
    res.json({ server: ["Successful registration"] }) :
    res.status(500).json({ server: ["Unsuccessful registration"] })
    
})


module.exports = router;