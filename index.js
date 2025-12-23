const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

// const hello = "Hello World";
// console.log(hello);

//sync version
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `this is the information about avocado: ${textIn}. \n Created on ${Date.now()}`;
// fs.writeFileSync("./txt/textOut.txt", textOut);
// console.log("File Written");

//Async version
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Step 1 Error");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data1);
//       console.log(data2);
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("File Written");
//       });
//     });
//   });
// });
// console.log("Reading File");

//==============================================================================================
//SERVER

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is an Overview");
  } else if (pathName === "/product") {
    res.end("This is an Product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hello World",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request from port 8000");
});

// const server = http.createServer((req, res) => {
//   const pathName = req.url;

//   res.end("Hellow from server :3");
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Hellow, listening now");
// });
