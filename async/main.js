// HTTP Requests
// make HTTP requests to get data from another server
// we make these requests to API endpoints

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      // console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        // console.log(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        // console.log("could not fetch the data");
        reject("something went wrong!");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/dexter.json")
  .then((data) => {
    console.log("promise resolved:", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });
// callback hell so we use promise to prevent ourselves repeatitive  of the callback function,...
// getTodos("todos/dexter.json", (err, data) => {
//   console.log(data);
//   // console.log(err, data);
//   // if (err) {
//   //   console.log(err);
//   // } else {
//   //   console.log(data);
//   // }
//   getTodos("todos/ibrah.json", (err, data) => {
//     console.log(data);

//     getTodos("todos/lebron.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// example of the promise

const getSomeThing = () => {
  return new Promise((resolve, reject) => {
    // resolve("some data");
    // reject("some error");
  });
};

// getSomeThing().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

//  another meathod

getSomeThing((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
