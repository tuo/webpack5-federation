import "./style.less";

// import * as camelCase from "../node_modules/lodash/camelCase.js";
import { sum } from "./sum.js";
import { camelCase, join } from "lodash-es";
// import { camelCase } from "lodash";
// console.log(camelCase("hello world"));
console.log("hell 222 index.js sum: " + sum(2, 4));
document.body.innerHTML += `<h1>2+4=${sum(2, 4)}</h1>`;
let a = 5;
let b = 10;

console.log("5 + 10 " + sum(a, b));

document.body.innerHTML += camelCase("hello world - ") + new Date();
document.body.innerHTML += "<hr/>";

function component() {
    const element = document.createElement("div");
    const button = document.createElement("button");
    const br = document.createElement("br");

    button.innerHTML = "Click me and look at the console!";
    element.innerHTML = join(["Hello", "webpack"], " ");
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = (e) =>
        import(/* webpackChunkName: "print" */ "./print")
            .then((module) => {
                const print = module.default;

                print();
            })
            .catch((error) =>
                alert("An error occurred while loading the component")
            );

    return element;
}

document.body.appendChild(component());
