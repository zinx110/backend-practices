const express = require("express");

const app = express();

require("dotenv").config();

// default most basic route
app.get("/", (req, res) => {
  res.send(process.env.SECRET);
  //   res.json("hi");
});

//
console.log(process.env.SECRET);

// start server at 3000
app.listen(3000, () => console.log("server is running"));
