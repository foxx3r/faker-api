const app = require("express")()
const usersRoute = require("../routes/users")

app.use("/", usersRoute)

module.exports = app
