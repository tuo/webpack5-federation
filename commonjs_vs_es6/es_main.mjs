// main.js

console.log(counter); // 3
incCounter();

import { counter, incCounter } from "./es_lib.mjs";
console.log(counter); // 4
setTimeout(() => {
    console.log("main counter  - ", counter);
}, 2500);
