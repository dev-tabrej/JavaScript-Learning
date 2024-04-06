const express = require('express')
const fs = require("fs")
const app = express()
const port = 3000

app.use(express.static("public"))

app.use((req, res, next) => {
    req.tabrej = "hey Tabrej is my name"
    console.log(`${Date.now()} is a ${req.method}`)
    fs.appendFileSync('tabrej.txt', `${Date.now()} is a ${req.method}\n`)
    // console.log("res")
    next()
})

app.use((res, req, next) => {
    console.log("m2")
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello World!' + req.tabrej)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
