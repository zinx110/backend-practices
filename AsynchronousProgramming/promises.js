const done = true;
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = "Here is the work";
    resolve(workDone);
  } else {
    const whyWorkNotDone = "Work is not done cuz 'reasons'";
    reject(whyWorkNotDone);
  }
});

isItDoneYet.then((res) => console.log(res));

const { response } = require("express");
const fs = require("fs");

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, data) => {
      if (error) {
        console.log("file not found");
        return reject(error);
      }
      console.log("file found");
      resolve(data.toString());
    });
  });
};

existingFile = "./fileSystemModule/file.txt";
nonExistingFile = "./nonEsistent.txt";

const getFileFunc = (fileName) => {
  getFile(fileName)
    .then((data) => console.log(data))
    .then(() =>
      isItDoneYet.then((res) => {
        console.log("will deliver work if file is found");
        console.log(res);
      })
    )
    .then(() => console.log("just console logging to work after delivery"))
    .catch((error) => {
      console.log("error caught in catch");
      console.log(error);
    });
};

getFileFunc(existingFile);
getFileFunc(nonExistingFile); // will run before the above because stack structure FILO

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const fetchFile = (filename) => {
  console.log(`fetching file from ${filename}`);
  fetch(filename)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return Promise.resolve(res);
      }
      console.log(
        `error in status so gonna throw error. Status : ${res.status}`
      );
      return Promise.reject(new Error(res.statusText));
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("fetch function");
      console.log(data);
    })
    .catch((error) => {
      console.log("error fetch function");
      console.log(error);
    });
};

fetchFile("https://api.punkapi.com/v2/beer/random"); // will run before the below one

fetchFile("https://jsonplaceholder.typicode.com/todos/1"); // will run at top because promise is stack structure

Promise.all([
  fetchFile("https://jsonplaceholder.typicode.com/todos/2"),
  fetchFile("https://jsonplaceholder.typicode.com/todos/3"),
]).catch((error) => {
  console.log("error in promise all");
  console.log(error);
});

Promise.race([
  fetchFile("https://jsonplaceholder.typicode.com/todos/4"),
  fetchFile("https://jsonplaceholder.typicode.com/todos/5"),
]).catch((error) => {
  console.log("error in promise race");
  console.log(error);
});

Promise.any([
  fetchFile("https://jsonplaceholder.typicode.com/todos/6"),
  fetchFile("https://jsonplaceholder.typicode.com/todos/7"),
]).catch((error) => {
  console.log("error in promise any");
  console.log(error);
});
