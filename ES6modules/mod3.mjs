export const func1 = () => {
  console.log("es6 module, individual export inline");
  return "es6 module, individual export inline";
};
const func2 = () => {
  console.log("es6 module, individual export separate");
  return "es6 module, individual export separate";
};

const func3 = () => {
  console.log("es6 module, seperate export in group ");
  return "es6 module, seperate export in group ";
};

const func4 = () => {
  console.log("es6 module, seperate export in group ");
  return "es6 module, seperate export in group ";
};
const func5 = () => {
  console.log("es6 module, seperate export default in group ");
  return "es6 module, seperate export default in group ";
};

const func6 = () => {
  console.log("es6 module, seperate export default in group ");
  return "es6 module, seperate export default in group ";
};

// run only one of the 2 functions form below
const func = () => {
  console.log("es6 module, seperate default export ");
  return "es6 module, seperate default export ";
};

// export default () => {
//   console.log("es6 module, inline default export ");
//   return "es6 module, inline default export ";
// };

export { func2 };
export { func3, func4 };

// export default func; //can also do this
export default { func5, func6 }; //either pass this or the one below
