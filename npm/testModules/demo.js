const x = 1000;

function add(num1) {
  return num1 + x;
}

function result(num) {
  return add(num * num);
}

module.exports.result = result;
