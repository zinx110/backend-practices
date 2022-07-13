const axios = require("axios");

const axiosReq = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/6")
    .then((res) => {
      console.log(`axios status: ${res.status}`);
      console.log(`axios res: ${res}`);
      console.log(res);
    })
    .catch((error) => console.log(`axios error: ${error}`));
};
const https = require("https");
const options = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/todos/6",
  method: "GET",
};

// axiosReq();

const req = https.request(options, (res) => {
  console.log(`http status : ${res.statusCode}`);
  console.log(`http res : ${res}`);
  console.log(res.data);
  req.on("data", (data) => {
    console.log("on data");
    process.stdout.write(data);
    console.log(data);
  });
});

// req.on("error", (error) => {
//   console.log("on error");
//   process.stdout.write(error);
//   console.log(error);
// });

// req.end();

const axiosPost = () => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      todo: "todo",
    })
    .then((res) => {
      console.log("axios post");
      console.log(`axios status : ${res.status}`);
      console.log(res.data);
    })

    .catch((error) => {
      console.log("axios Error");
      console.log(error);
    });
};

// axiosPost();

const data = JSON.stringify({
  todo: " https raw post",
});

const options2 = {
  hostname: "jsonplaceholder.typicode.com",
  port: 443,
  path: "/posts",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req2 = https.request(options2, (res) => {
  console.log(`status : ${res.statusCode}`);

  res.on("data", (data) => {
    console.log("https data post");
    process.stdout.write(data);
  });
});

req2.on("error", (error) => {
  console.log("https error post");
  process.stdout.write(error);
});

req2.write(data);
req.end();
