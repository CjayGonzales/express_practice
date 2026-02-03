// creating the neccessary ports, and app
const express = require('express')
const app = express()
const port = 5000

// sending the resource "hello cjay" as an app.get request
app.get('/', (req, res) => {
    res.send('Hello Cjay')
})

// message logged with the port number
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})