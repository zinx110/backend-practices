const fun = () => {};

setTimeout(() => {
  process.nextTick(() => {
    console.log("1. nextTick in setTimeout1");
  });
  console.log("2. setTimeout1");
});
setImmediate(() => {
  process.nextTick(() => {
    console.log("3. nextTick in setImmediete");
  });
  console.log("4. setImmediate");
});
setTimeout(() => {
  process.nextTick(() => {
    console.log("5. nextTick in setTimeout2");
  });
  console.log("6. setTimeout2");
});

new Promise((resolve, reject) => {
  console.log("7. inside promise, but not resolve");
  resolve("8. this is resolve");
}).then((resolve) => {
  process.nextTick(() => {
    console.log("9. nextTick in resolve->");
  });
  setTimeout(() => {
    process.nextTick(() => {
      console.log("10. nextTick in resolve->setTimeout");
    });
    setImmediate(() => {
      process.nextTick(() => {
        console.log("10.1. nextTick in in resolve->setTimeout->setImmediete");
      });
      console.log("10.2. in resolve->setTimeout->setImmediate");
    });
    console.log("11. this is console.log inside in resolve->setTimeout");
    console.log("12. in resolve->setTimeout->console.log...", resolve);
  }, 0);
  console.log("13. this is console.log inside in resolve->");
  console.log(resolve);
});

setImmediate(() => {
  process.nextTick(() => {
    console.log("14. nextTick in setImmediete2");
  });
  console.log("15. setImmediate2");
});
setTimeout(() => {
  process.nextTick(() => {
    console.log("16. nextTick in setTimeout3");
  });
  console.log("17. setTimeout3");
});

process.nextTick(() => {
  console.log("18. raw nextTick ");
});
