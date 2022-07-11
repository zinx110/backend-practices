const fs = require("fs");

fs.readFile("./fileSystemModule/file.txt", "utf8", (err, data) => {
  console.log(1, err, data);
});
const a = fs.readFileSync("./fileSystemModule/file.txt", "utf8");

console.log(2, "a", a);

// fs.writeFile("./fileSystemModule/file2.txt", "utf8", (err, data) => {
//   console.log(err, data);
// }); // okay,takes 2 arguments and a callback . the below is the accurate command

fs.writeFile("./fileSystemModule/file3.txt", "test test", () => {
  console.log(3, "written in file3.txt");
  fs.readFile("./fileSystemModule/file3.txt", "utf8", (error, data) => {
    console.log(4, error, data);
  });
});

setTimeout(() => {
  fs.writeFile("./fileSystemModule/file3.txt", "rewrite of test test", () => {
    console.log(5, "Rewritten in file3.txt");
    fs.readFile("./fileSystemModule/file3.txt", "utf8", (error, data) => {
      console.log(6, error, data);
    });
  });
}, 5000);

const b = fs.writeFileSync("./fileSystemModule/file4.txt", "Hiiiii");
console.log(7, "b", b);
console.log(8, fs.readFileSync("./fileSystemModule/file4.txt", "utf8"));
