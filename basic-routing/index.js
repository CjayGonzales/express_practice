// create the routes
const express = require('express')
const app = express()
const port = 5000


// get modules

// the "/" is actually the link
app.get("/", (req, res) => {
    res.send("Sup")
})

// these are some of the basic routings:

app.post("/post", (req, res) => {
    res.send("This is a POST request")
})

app.put("/put", (req, res) => {
    res.send("This is a put request")
})

app.delete("/del", (res, req)=>{
    res.send("This is a delete request")
})

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
})

app.use('/static', express.static('public'))

// should run an actual path instead of the actual directory
// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))