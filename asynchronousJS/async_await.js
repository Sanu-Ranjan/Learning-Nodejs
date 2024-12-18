//another way to handle promises
//but we need to wrap code in async decorated function
let user = { id: "35" };
function demoPromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(`user with id: ${this.id} exist`), 1000);
  });
  return promise;
}

function findRepo(result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

async function userDetail(user) {
  try {
    let status = await demoPromise.call(user);
    console.log(status);
    let userrepo = await findRepo(status);
    console.log(userrepo);
  } catch (error) {
    console.log(error.message);
  }
}

userDetail(user);
