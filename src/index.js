import "./style.scss";

// import * as camelCase from "../node_modules/lodash/camelCase.js";
import { sum } from "./sum.js";
import { camelCase } from "lodash";
// console.log(camelCase("hello world"));
console.log("hell index.js sum: " + sum(2, 4));

let a = 5;
let b = 10;

console.log("5 + 10 " + sum(a, b));

console.log(camelCase("hello world"));
