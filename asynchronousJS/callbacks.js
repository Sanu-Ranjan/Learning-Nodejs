getUser(1, function (user) {
  console.log("user:", user);

  //get repositories
  getRepositories("user1", (data) => {
    console.log(data.repo);
  });
});

//after 2 seconds will pass data to call back function
//this simulates asynchronous behaviour
function getUser(id, callback) {
  setTimeout(() => {
    console.log("reaing from database");
    callback({ id: id, gitHubUser: "user1" });
  }, 1000);
}

//after 2 seconds will pass data to call back function
//this simulates asynchronous behaviour
function getRepositories(user, callback) {
  setTimeout(() => {
    callback({ user: user, repo: ["repo1", "repo2", "repo3"] });
  }, 2000);
}
