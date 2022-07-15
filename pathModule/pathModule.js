const path = require("path");

const file = "./text.txt";

console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));
console.log(path.basename(file, path.extname(file)));
console.log(
  path.join(
    "/",
    "desktop/files",
    path.basename(file, path.extname(file)),
    "Hi.txt"
  )
);
console.log(path.resolve(file));
console.log(path.resolve("temp", file));
console.log(path.resolve("/temp", file));
console.log(path.normalize(file));
console.log(path.normalize("./users/lib//../../../fileSystemModule/file.txt"));
