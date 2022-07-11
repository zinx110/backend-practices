console.log("My %s has %d ears", "cat", 2);
console.log("%o", Number);
console.clear();
const x = 1;
const y = 2;
console.count(
  "the value of x is " + x + " and has been checked .. how many times?"
);
console.count(
  "the value of x is " + x + " and has been checked .. how many times?"
);
console.count(
  "the value of x is " + y + " and has been checked .. how many times?"
);
console.count(y);
console.count(y);

const oranges = ["orange", "orange", "orange"];
const apples = ["just one apple"];

oranges.forEach((fruit) => {
  console.count(fruit);
});
apples.forEach((fruit) => {
  console.count(fruit);
});

const fun1 = () => console.trace();
const fun2 = () => fun1();
// fun2();
// fun1();

console.clear();
const funfun1 = () => console.log("one");
const testtest = () => {
  console.time("funfun1()");
  funfun1();
  console.timeEnd("funfun1()");
};
testtest();

// basic low level color output
console.log("\x1b[33m%s\x1b[0m", "hi!");
// color with calk module
const chalk = require("chalk");
console.log(chalk.greenBright("hi2!"));

const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 10 });

const timer = setInterval(() => {
  bar.tick();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 1000);
