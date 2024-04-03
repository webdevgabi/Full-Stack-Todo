const express = require('express');

// UTILITIES
const insert = require("../utilities/db/insert")

const router = express.Router();
router.post("/", async (req, res) => {

    const isInserted = await insert({ collection: "users", data: req.body })

    isInserted ? 
    res.json({ server: ["Sikeres regisztráció"] }) :
    res.status(500).json({ server: ["Regisztráció sikertelen"] })
    
})


module.exports = router;