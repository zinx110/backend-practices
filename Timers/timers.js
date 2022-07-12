setTimeout(() => {
  console.log("timeout");
}, 1000);

const id = setTimeout(() => {
  console.log("timeout to cancel");
}, 3000);
const id2 = setTimeout(() => {
  console.log("timeout 3");
}, 4000);
clearTimeout(id);

const func = () => {
  setTimeout(() => {
    console.log("timerout 0 in func");
  }, 0);
  console.log("should run before timer 0");
};
func();
console.log("should run after timer 0"); //runs before as setTImeout is always pushed at the end of queue of all function unlike process.nextTick()

// setInterval(() => {
//   console.log("interval 1");
// }, 3000);

const intervalId = setInterval(() => {
  console.log("interval to cancel in 10 secs");
}, 3000);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);

let taskDone = false;
const idStop = setInterval(() => {
  console.log("running some tasks");
  if (taskDone) {
    console.log("TaskCompleted");
    clearInterval(idStop);
  }
}, 2000);

setTimeout(() => {
  taskDone = true;
}, 10000);

let idForCallbackTimeoutLoops;
const funcOne = () => {
  console.log(Date.now());
  idForCallbackTimeoutLoops = setTimeout(funcOne, 2000);
};
setTimeout(funcOne, 12000);

clearTimeout();
setTimeout(() => {
  clearTimeout(idForCallbackTimeoutLoops);
}, 20000);
