const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");

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
//

//Read Template Overview
const temptOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8"
);
//Read Template Card
const temptCard = fs.readFileSync(
  `${__dirname}/templates/template-card.html`,
  "utf-8"
);
//Read Product
const temptProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8"); //Read the data once

const dataObj = JSON.parse(data); //Parse JSON data

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  console.log(pathname);

  //Overview Page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "content-type": "text/html" });

    const cardsHtml = dataObj
      .map((el) => replaceTemplate(temptCard, el))
      .join("");

    const output = temptOverview.replace("{%Product_Cards%}", cardsHtml);
    res.end(output);

    //Product Page
  } else if (pathname === "/product") {
    res.writeHead(200, { "content-type": "text/html" });
    const product = dataObj[query.id];
    const output = replaceTemplate(temptProduct, product);
    res.end(output);

    //Api Page
  } else if (pathname === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);

    //Not Found
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
//   const pathname = req.url;

//   res.end("Hellow from server :3");
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Hellow, listening now");
// });
