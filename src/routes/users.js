const express = require("express")
const app = express()
const path = require("path")
const faker = require("faker")
const bodyParser = require("body-parser")
const handlebars = require("express-handlebars")

// config
app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.get("/", (req, res, next) => {
  res.render("home", {
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    birthday: faker.date.past(),
    city: faker.address.city(),
    country: faker.address.country(),
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

