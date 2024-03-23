const express = require('express')
const app = express()
const port = 3000
app.use(express.static("public"));


// app.post('/', (req, res) => {
//     console.log("This is a post request")
//     res.send('Hello World post!')
// })

app.post('/', (req, res) => {
    console.log("This is a post request");
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        console.log("Received body:", body);
        res.send('Hello World post!');
    });
});

app.get('/', (req, res) => {
    console.log("This is a get request")
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

