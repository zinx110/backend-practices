const repl = require("repl");

const local = repl.start("$  ");

local.on("exit", () => {
  console.log("exisitng repl");
  process.exit();
});
