getUser(1).then(handleUserData).then(handleRepo);

function handleUserData(user) {
  //data handler or task 1
  console.log(user);
  return getRepositories("user1"); //trigger task 2
}

function handleRepo(data) {
  //data handler for  second task
  console.log(data.repo);
}

//after 2 seconds will pass data to call back function
//this simulates asynchronous behaviour
function getUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      //task 1
      console.log("reading from database");
      resolve({ id: id, gitHubUser: "user1" });
    }, 1000);
  });
}

//after 2 seconds will pass data to call back function
//this simulates asynchronous behaviour
function getRepositories(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      //task2
      resolve({ user: user, repo: ["repo1", "repo2", "repo3"] });
    }, 2000);
  });
}
