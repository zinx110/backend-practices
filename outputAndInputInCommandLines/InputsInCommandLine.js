const readline = require("readline");
const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("whats thou name? ", (name) => {
  console.log(`Hi stupid ${name}!`);
  readLine.close();
});

// // probably need es6 import. so didn't try cuz too lazy to change in package.json (also confusing cuz did the top part in this file in commonJS)
// const inquirer = require("inquirer");

// const questions = [{ type: "input", name: "name", message: "whats your name" }];

// inquirer.prompt(questions).then((answers) => {
//   console.log(`Hi ${answers.name}!`);
// });
