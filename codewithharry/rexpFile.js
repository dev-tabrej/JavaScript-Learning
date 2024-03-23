let express = require('express')
let app = express();
const port = 3000;

// url :  http://127.0.0.1:3000/blog/harry/tabrej?name=harryputter&high=0
app.use(express.static('public'))
app.get("/", (req, res) => {
    // console.log(req.params)              
    res.send("this is home page")
})
app.get('/blog/:slug/:second', (req, res) => {
    console.log(req.params) //{ slug: 'harry', second: 'tabrej' }
    console.log(req.query) //{ name: 'harryputter', high: '0' }
    res.send(`hello to this page ${req.params.slug} and this link ${req.params.second}`)
});

// app.get('/about', (req, res) => {
//     res.send("about")
// })


app.listen(port, () => {
    console.log("listening on this", port)
})