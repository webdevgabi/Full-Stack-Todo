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
const taskRoute = require("./routes/task/");
app.use('/tasks', taskRoute)

const userRoute = require("./routes/user/");
app.use('/user', userRoute)


app.listen(3000, () => console.log("http//localhost:3000"))