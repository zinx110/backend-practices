const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This is basic http server</h1>");
});

server.listen(port, () => console.log("listening to 3000"));
