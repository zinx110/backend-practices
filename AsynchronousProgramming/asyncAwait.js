const promiseFunc = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res("function RUn");
    }, 3000);
  });
};
const asyncFunc = async () => {
  console.log("inside async before await");
  console.log(await promiseFunc());
  console.log("inside async after await");
  console.log("inside async before await 2");
  console.log(await promiseFunc());
  console.log("inside async after await 2");
};

console.log("before async await");
asyncFunc();
console.log("after async await");

const asyncFunc2Promise = async () => {
  return Promise.resolve("asyncFunc2Promise 2 ");
};
const asyncFunc2 = async () => {
  return "asyncFunc 2 ";
};

asyncFunc2Promise().then((res) =>
  console.log(res + "async2PromiseTestWithPromise")
);
asyncFunc2().then((res) => console.log(res + "async2TestWithPromise"));

const func3 = async () => {
  console.log("-async3");
  const res = await promiseFunc();
  console.log("-async3--");
  return res + "--->async3";
};
const func4 = async () => {
  console.log("-async4");
  const res = await func3();
  console.log("-async4--");
  return res + "--->async4";
};

func4().then((res) => console.log(res));
