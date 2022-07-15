const fs = require("fs");

const read1 = fs.readFileSync("./fileSystemModule/file.txt", "utf8");
console.log(read1);

fs.appendFile(
  "./fileSystemModule/file.txt",
  "'This is appended part'",
  (error) => {
    if (error) {
      console.log(error);
    }
    console.log("appended");
    fs.readFile("./fileSystemModule/file.txt", "utf8", (err, data) => {
      if (err) {
        console.log("error in reading after append");
      } else {
        console.log("data from reading after append");
        console.log(data);
      }
    });
  }
);

try {
  const appendSync = fs.appendFileSync(
    "./fileSystemModule/file.txt",
    "'This is appended from appendSync'"
  );
  console.log("appendSync");
  console.log(appendSync);
} catch (error) {
  console.log("error in appendSync");
}
