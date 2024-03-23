var express = require('express');
const router = express.Router()

router.get("/", (req, res) => {
    console.log("This is from blogs Page")
    res.send("This is Get Blog")
})

router.get("/about/:slug", (req, res) => {
    console.log("This is from blogs Page")
    res.send(`This is about ${req.params.slug}`)
})

router.get("/main", (req, res) => {
    console.log("This is from blogs Page")
    res.send("This is Main Blog")
})

module.exports = router