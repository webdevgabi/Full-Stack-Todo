const express = require('express');
const cors = require('cors')

const app = express();

// SETTINGS
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// ROUTES
const registerRoute = require("./routes/register");
app.use('/register', registerRoute)

app.listen(3000, () => console.log("http//localhost:3000"))