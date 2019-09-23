const express = require("express")
const app = express()
const faker = require("faker")
const handlebars = require("express-handlebars")

// config
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(express.static('public'))
app.use(express.static("views"))

faker.locale = "pt_BR"
// routes
app.get("/", (req, res, next) => {
  res.render("home", {
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthday: faker.date.past(),
    city: faker.address.city(),
    phone: faker.phone.phoneNumber(),
    state: faker.address.stateAbbr(),
    street: faker.address.streetName(),
    zipcode: faker.address.zipCode(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ip: faker.internet.ip()
  })
})

module.exports = app

