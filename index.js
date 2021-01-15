const swaggerUI = require('swagger-ui-express')
const swaggerDoc = require('./swagger')

const express = require('express')

const bodyParser = require('body-parser')
const _ = require('lodash')

const app = express()
app.use(bodyParser.json())

app.get('/users', function (req, res) {

    const users = [{
        firstName: "Kazım",
        lastName: "Etiksan",
        age: 39
    },{
        firstName: "Leyla",
        lastName: "Demir",
        age: 32
    },{
        firstName: "Kaan",
        lastName: "Ertekin",
        age: 42
    }]
    res.send(users)
})

app.get('/contact', function (req, res) {
    const contact = {
        phone: "05324871200",
        address: "İstanbul",
        name: req.query.city
    }
    res.send(contact)
})

app.get('/api-def', function (req, res) {

    res.send(swaggerDoc)
})

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

app.listen(8080, () => {
    console.log('app server is running')
})