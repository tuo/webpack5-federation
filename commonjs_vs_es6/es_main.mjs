// main.js

console.log(counter); // 3
incCounter();

import { counter, incCounter, obj } from "./es_lib.mjs";
console.log(counter); // 4

setTimeout(() => {
    console.log("main counter  - ", counter);
    obj.test = 124; //good ,because it not modify itself
    counter = -1; //由于 ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错。
    obj = null; //error
}, 2500);

//ES6 模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块。

//从 Node.js v13.2 版本开始，Node.js 已经默认打开了 ES6 模块支持。
