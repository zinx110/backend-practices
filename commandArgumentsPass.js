process.argv.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});

console.log("get only extra arguements");
const args = process.argv.slice(2);

args.forEach((value, index) => {
  console.log(`${index}:${value}`);
});

const args2 = require("minimist")(process.argv.slice(2));
args2.name;
console.log("args.name: ", args2.name);
