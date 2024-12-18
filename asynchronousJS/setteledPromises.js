//resolved promise
Promise.resolve("done!").then((result) => {
  console.log(result);
});

//always use error object when rejecting promise so that we can see the call stack
Promise.reject(new Error("rejected")).then(null, (error) => {
  console.log(error);
});

//running promises in parallel
{
  let promise1 = new Promise((resolve) => {
    console.log("task 1 started");
    resolve("resolved promise 1");
  });
  let promise2 = new Promise((resolve, reject) => {
    console.log("task 2 started");
    reject(new Error("rejected"));
    setTimeout(() => resolve("task 2 done"), 5000);
  });

  // Promise.all([promise1, promise2])
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log(error));

  Promise.race([promise1, promise2]).then(
    (result) => console.log(result),
    (error) => console.log(error)
  );
}
