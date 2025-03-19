const { log } = require("node:console");

//const barnab= require("./second");
//console.log("helloe",barnab);

//const math = require('./first');
//console.log(math.add(5, 3)); 

//Node packages are pre-written JavaScript modules that you can install and use in your projects.
//OS module
//const os = require('node:os');
//console.log(os.totalmem());
//console.log(os.type());

//PaTH
/*
const path = require('path');
const filePath = "Users/barna/Desktop/WEBDEV/nodejstutorial/index.js";

console.log("Base Name:", path.basename(filePath)); 
console.log("Dir Name:", path.dirname(filePath));   
console.log("Extension:", path.extname(filePath));  
console.log("Join Path:", path.join(__dirname, "newFolder", "file.txt"));
*/
//File Sysytem Module
/*
const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
fs.writeFile('file.txt','hi leena', (err) => {
    if (err) throw err;
    console.log("File written successfully!");
});
fs.appendFile('file.txt', '\nNew goob goob', (err) => {
    if (err) throw err;
    console.log("Content appended!");
});
fs.unlink('output.txt', (err) => {
    if (err) throw err;
    console.log("File deleted!");
});
*/

