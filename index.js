const fs = require("fs");

// const hello = "Hello World";
// console.log(hello);

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(textIn);

const textOut = `this is the information about avocado: ${textIn}. \n Created on ${Date.now()}`;
fs.writeFileSync("./txt/textOut.txt", textOut);
console.log("File Written");
