
//moder approach Es6 import/export
//import { add } from "./math.js";
//console.log(add(5,3));

//blocking code
/*
const fs = require('fs');

console.log("Start");
const data = fs.readFileSync('file.txt', 'utf8');  // Blocks execution
console.log(data);
console.log("End");
*/

//non blocking
/*
const fs = require('fs');

console.log("Start");
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log("End");
*/

//URL module
/*
const url = require('url');
const myURL = new URL('https://example.com:8080/path?name=John&age=25');
console.log(myURL.hostname);   // example.com
console.log(myURL.pathname);   // /path
console.log(myURL.search);     // ?name=John&age=25
console.log(myURL.searchParams.get('name'));  // John
*/
//Events Module
/*
const { log } = require('console');
const EventEmitter = require('events');
const event = new EventEmitter();

event.on('sayhello',(name)=>{
    console.log(`heloo,${name}`);   
});

event.emit('sayhello','Alice');
*/
/*
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.writeHead(200);
        res.end('<h1>Welcome to the Home Page</h1>');
    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end('<h1>About Us</h1>');
    } else {
        res.writeHead(404);
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
*/
/*
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Set response header
    res.end('Hello, World!\n'); // Send response body
});

// Define the port and start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
*/