const hiModule = require("./exportModule");

// general
// console.log(hiModule);

// using export by directly typing export.hi, exports.hiFunc
console.log(hiModule.hi);
hiModule.hiFunc();

// using export as module.exports
console.log(hiModule.hi);
// hiFunc(); // single export of only hiFunc

// using export as module using module.exports={... , ... , ...}
console.log(hiModule.hi);
hiModule.hiFunc();
