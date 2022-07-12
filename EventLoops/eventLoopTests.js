const bar = () => console.log("bar");
const baz = () => console.log("baz");
const one = () => console.log("one");
const two = () => console.log("two");
const three = () => console.log("three");
const four = () => console.log("four");
const five = () => console.log("five");

const foo = () => {
  console.log("foo");
  bar();
  baz();
  setTimeout(one, 0);
  two();
};

// foo();

const foo2 = () => {
  console.log("foo2");
  setTimeout(() => {
    one();
    console.log("inside setTimeout");
  }, 0);
  two();
  console.log("after 2");

  new Promise((resolve, reject) => {
    three();
    resolve(
      "This is 'resolve', it's running after  two, three but before four"
    );
  }).then((resolve) => {
    console.log(resolve);
    console.log("inside '.then(resolve=>resolve...)' and after 'resolve'");
  });
  four();
};
console.log("beforefoo2");
foo2();
console.log("afterfoo2");
five();
