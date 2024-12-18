//exercise 1
{
  //convert to promise based approach and use async await
  getCustomer(1, (customer) => {
    console.log("Customer: ", customer);
    if (customer.isGold) {
      getTopMovies((movies) => {
        console.log("Top movies: ", movies);
        sendEmail(customer.email, movies, () => {
          console.log("Email sent...");
        });
      });
    }
  });

  function getCustomer(id, callback) {
    setTimeout(() => {
      callback({
        id: 1,
        name: "Mosh Hamedani",
        isGold: true,
        email: "email",
      });
    }, 4000);
  }

  function getTopMovies(callback) {
    setTimeout(() => {
      callback(["movie1", "movie2"]);
    }, 4000);
  }

  function sendEmail(email, movies, callback) {
    setTimeout(() => {
      callback();
    }, 4000);
  }
}

{
  //converted to promises and async await
  customer(1);
  async function customer(id) {
    let customer = await getCustomer(id);
    console.log("Customer: ", customer);
    if (customer.isGold) {
      let movies = await getTopMovies();
      console.log("Top movies: ", movies);
      await sendEmail(customer.email, movies);
      console.log("Email sent...");
    }
  }

  function getCustomer(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: "Mosh Hamedani",
          isGold: true,
          email: "email",
        });
      }, 4000);
    });
  }

  function getTopMovies() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["movie1", "movie2"]);
      }, 4000);
    });
  }

  function sendEmail(email, movies) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 4000);
    });
  }
}