const { request, response } = require("express")
const express = require("express") //declaration
const app = express() //instatiation

app.use(express.json())

//endpoint (url), callback function (lambda)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/clock.html")
})

const port = 5000
app.listen(process.env.PORT || "5000", (error) => {
    console.log("Successfully connected to port", port)
})