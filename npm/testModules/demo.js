const { remainder } = require("./remainder");
const x = 1000;

function result(num1, num2) {
  let rem = remainder(num1, num2);
  return x * rem;
}

module.exports = { result, remainder };
