const express = require('express');
const cors = require('cors')

const connection = require("./utilities/db/connection")

const app = express();

// SETTINGS
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
connection()

// ROUTES
const registerRoute = require("./routes/register");
app.use('/register', registerRoute)

const loginRoute = require("./routes/login");
app.use('/login', loginRoute)

const taskRoute = require("./routes/task");
app.use('/task', taskRoute)

app.listen(3000, () => console.log("http//localhost:3000"))