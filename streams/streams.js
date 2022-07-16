const fs = require("fs");

const file = "./streams/file.txt";

// // without stream
// try {
//   console.log(fs.readFileSync(file, "utf8"));
// } catch (error) {
//   console.log("error in fs");
//   console.log(error);
// }

// try {
//   const stream = fs.createReadStream(file);
//   stream.on("data", (chunk) => {
//     console.log(chunk.toString());
//   });
//   console.log("testing");

// } catch (error) {
//   console.log("error in fs");
//   console.log(error);
// }

const Stream = require("stream");

const readableStream = new Stream.Readable({
  read() {},
});

// readableStream.push('hi')
// readableStream.push('hi2')

const writeableStream = new Stream.Writable();

writeableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString());
  next();
};

readableStream.pipe(writeableStream);

readableStream.push("hi");
readableStream.push("hi2");
readableStream.push("hi3");

readableStream.on("close", () => writeableStream.end());
writeableStream.on("close", () => console.log("ended"));

readableStream.destroy();

const { transform, Transform } = require("stream");

const transformStream = new Transform();

transformStream._transform = (chunk, encoding, callback) => {
  transformStream.push(chunk.toString().toUpperCase());
  callback();
};

process.stdin.pipe(transformStream).pipe(process.stdout);

setTimeout(() => {
  transformStream.end();
}, 5000);
