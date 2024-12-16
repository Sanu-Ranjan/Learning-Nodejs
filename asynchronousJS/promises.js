//replacing call backs with promises

//constructor syntax for promise object
{
  let promise = new Promise(function (resolve, reject) {
    //executor
    setTimeout(() => {
      resolve("done");
    }, 1000);
  });
}
//copy above code in console and run
//we will see that the state: is resolved
// and result will have value as "done"

{
  //reject(error): it is recommended to use error objects
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject(new Error("rejected"));
    });
  });
} //try running the code in console

{
  //immediately calling resolve reject
  let promise = new Promise(function (resolve, reject) {
    //not taking time to do the job
    resolve({ value: "value" });
  });
} //example if results are cached

{
  //cunsumers: .then() .catch()
  promise.then(
    function (result) {
      /* used to handle result*/
    },
    function (error) {
      /*used to handle error*/
    }
  );

  //if we are interested only in errors then
  //we can either use .then(null,function(error){/*code*/})
  //or we can use .catch(function(error){/*code*/})
}

{
  //finally: gets executed no matter promise is rejected or fulfilled
  //passes no arguments to callback function
  //passes  through the result or error to the next suitable handler
  //if finally handler returns something it is ignored
  //exception is if finally throws an error then execution
  // goes to nearest error handler
  let promise = new Promise(function (resolve, reject) {
    reject(new Error({ error: "Error Message" }));
  });
  promise
    .finally(() => stopLoadingIndicator)
    .catch((error) => {
      /*handle error*/
    });
}

{
  //we can add promise handler any time: if results are already
  //there they just execute
  //if promise is pending handles wait for outcome
  //if promise is setteled then handlers run immediately

  //creating resolved promise
  let resolvedPromise = new Promise((resolve) => resolve("resolved"));
  //promise handler
  resolvedPromise.then((result) => alert(result)); //done! shows up immediately
}
