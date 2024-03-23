const fs = require("fs");

// console.log(fs)

fs.writeFile("sample.txt", "this is my first sync file ", (err) => {
    if (err) console.log(err)
    fs.readFile("sample.txt", (err, data) => {
        // console.log(err, data.toString())
        fs.appendFile("sample.txt", "Append my name", (err, data) => {
            console.log(err, data)
        })
    })
})
