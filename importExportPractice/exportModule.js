const hi = "hi";
const hiFunc = () => {
  console.log("I'm Hi(gh) through Func :3");
};

// using export by directly typing export.hi, exports.hiFunc
// exports.hi = hi;
// exports.hiFunc = hiFunc;

// using export as module.exports
// module.exports = hiFunc;

console.log(exports, require, module, __filename, __dirname);

module.exports = { hi, hiFunc };
