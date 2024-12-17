//if we have a sequence of asynchronous
//tasks to be performer one after another
//then we can use promise chaining
{
  //example 1
  let promise = new Promise((resolve) => resolve("done!")); //task one

  promise
    .then((result) => {
      console.log(result);
      return new Promise((resolve) => {
        setTimeout(() => resolve(result + " task2"), 2000); //task2
      });
    })
    .then((result) => {
      console.log(result);
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result + " task3"); //task3
        }, 1000);
      });
    })
    .then((result) => console.log(result));

  //example 2
  //another way to write
  let user = { id: "35" };
  function demoPromise() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(`user with id: ${this.id} exist`), 1000);
    });
    return promise;
  }

  function findRepo(result) {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(["repo1", "repo2", "repo3"]);
      }, 2000);
    });
  }

  demoPromise
    .call(user)
    .then(findRepo)
    .then((result) => {
      console.log(result);
    });

  console.log("start !!!");

  {
    /* the whole thing works because .then(handler) returns a new promise 
    so that we can call next .then on it. 
    when handler returns a value then it becomes 
    the result of that promise*/
  }
}

{
  let promise = new Promise((resolve, reject) => {
    resolve({ value: "Value1" });
  });

  let promise2 = promise.then((result) => {
    console.log(result);
    return "result of promise 2";
  });

  promise2.then((result) => {
    console.log(result);
  });
}
