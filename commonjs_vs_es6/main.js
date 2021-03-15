var counter = require("./lib").counter;
var incCounter = require("./lib").incCounter;

console.log("main ", counter); // 3
// counter = 10;
// console.log("main2 ", counter); // 10

incCounter();
console.log("main after ", counter); // 3
console.log("main after import again ", require("./lib").counter); // 3

setTimeout(() => {
    console.log("main after 3 seconds", counter);
    console.log("main after 3 seconds", require("./lib").counter);
    console.log("main after 3 seconds", require("./lib").incCounter());
}, 3000);
