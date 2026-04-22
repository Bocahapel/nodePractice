const eventEmitter = require("events");

const myEmitter = new eventEmitter();

myEmitter.on('Sales', ()=>{console.log("New Sales!")});
myEmitter.on('Sales', ()=>{console.log("Old Sales!")});

myEmitter.emit("Sales");