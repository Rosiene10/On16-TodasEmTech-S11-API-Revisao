const express = require("express")
const app = express()
const gamesRoutes = require("./Routes/GamesRoutes")

app.use(express.json())
app.use("/", gamesRoutes)

module.exports = app
