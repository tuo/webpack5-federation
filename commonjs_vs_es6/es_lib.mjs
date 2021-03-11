export let counter = 3;
console.log("counter", counter);
export function incCounter() {
    console.log("in counter", counter);
    counter++;
}
setTimeout(() => {
    console.log("2seconds  - ", counter);
    counter = 1000000;
}, 2000);
