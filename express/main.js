const express = require('express')
const blog = require("./routes/blog.js")
const app = express();
const port = 3000
app.use(express.static("public"));
app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log("This is a get request")
    // console.log("Request body:", req.body);
    // console.log("Request headers:", req.headers);
    res.send('Hello World!')
})

app.get('/index', (req, res) => {
    console.log("This is a get request to send file")
    // console.log("Request body:", req.body);
    // console.log("Request headers:", req.headers);
    res.sendFile('/templates/index.html', { root: __dirname })
})
app.get('/api', (req, res) => {
    console.log("This is a get request to send file")
    // console.log("Request body:", req.body);
    // console.log("Request headers:", req.headers);
    res.json({ a: 1, b: 5, name: ["Tabrej", "Shavej"] })
})
app.post('/', (req, res) => {
    console.log("Received POST request");
    console.log("Request body:", req.body);
    console.log("Request headers:", req.headers);
    res.send('Hello World post!');
});

app.put('/', (req, res) => {
    console.log("This is a put request")
    res.send('Hello World put!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

