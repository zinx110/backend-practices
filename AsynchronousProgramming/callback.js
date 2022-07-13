// callbacks
const fs = require("fs");
fs.readFile("/nonExistentFile.txt", (error, data) => {
  if (error) {
    console.log("Error happened"); // first parameter on callbacks are error object
    console.log(error);
    return null;
  }

  console.log("no error");
  console.log(data);

  // intentional error
});
