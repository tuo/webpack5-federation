import "./style.less";

// import * as camelCase from "../node_modules/lodash/camelCase.js";
import { sum } from "./sum.js";
import { camelCase } from "lodash-es";
// import { camelCase } from "lodash";
// console.log(camelCase("hello world"));
console.log("hell 222 index.js sum: " + sum(2, 4));
document.body.innerHTML += `<h1>2+4=${sum(2, 4)}</h1>`;
let a = 5;
let b = 10;

console.log("5 + 10 " + sum(a, b));

document.body.innerHTML += camelCase("hello world - ") + new Date();
