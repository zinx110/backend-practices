import eventEmitter from "events";

class MyEmitter extends eventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  console.log("event happened");
});
myEmitter.on("turned off", () => {
  console.log("turned off motor");
});
myEmitter.on("waterfall", () => {
  console.log("turn off water motor");
  setTimeout(() => {
    console.log("motor will automatically turn off now");
    myEmitter.emit("turned off");
  }, 5000);
});
// myEmitter.emit("event");

console.log("code running");
myEmitter.emit("waterfall");
console.log("code is still running");
