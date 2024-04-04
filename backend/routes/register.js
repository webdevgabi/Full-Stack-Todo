const express = require('express');
const bcrypt = require('bcrypt')

// UTILITIES
const insert = require("../utilities/db/insert")

const router = express.Router();
router.post("/", async (req, res) => {

    req.body.password = await bcrypt.hash(req.body.password, 10);

    const isInserted = await insert({ collection: "users", data: req.body })

    isInserted ? 
    res.json({ server: ["Sikeres regisztráció"] }) :
    res.status(500).json({ server: ["Regisztráció sikertelen"] })
    
})


module.exports = router;