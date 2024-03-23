// _____________________ CommonJS____________

// const { createServer } = require('node:http');

// const http = require('http')
// const fs = require('fs')

// _____________________ModuleJS/ES6________

// import http from 'http'

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1> hello brother</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// ___________________________  Default export _______________
// const Tabrej = {
//   name: "tabrej",
//   branch: "CSE"
// };
// export default Tabrej;

// export const name = "tabrej"
// export const myBatch = "2023"

var c = require('./main.js')
console.log(c)