var counter = 3;
function incCounter() {
    // this will capture its variable (bedcause it is actaullyed executed in a closure in source code) , all copy of reference to this function will be same and captured varaibles will keep
    console.log("in - counter", counter);
    console.log("in - id", module.id);
    console.log("in - isloaded", module.loaded);
    counter++;
    console.log("in - counter omcr", counter);
}
// counter++;
console.log("counter", counter);
console.log("id", module.id);
console.log("isloaded", module.loaded);

setTimeout(() => {
    console.log("2seconds  - ", counter);
}, 2000);

module.exports = {
    counter,

    incCounter: incCounter,
};

// get counter() {
//   return counter;
// },
//https://es6.ruanyifeng.com/#docs/module-loader#ES6-%E6%A8%A1%E5%9D%97%E4%B8%8E-CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82
//https://www.cnblogs.com/unclekeith/p/7679503.html
