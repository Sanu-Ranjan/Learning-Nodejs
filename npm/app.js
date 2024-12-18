const each = require("underscore/cjs/each.js");
const result = require("./testModules/demo");
let obj3 = { limit: 20 };
let obj = { name: "john", age: 32, admin: true };
each(
  obj,
  function (value, key, list) {
    if (key === "age") console.log("eligible", " ", `${value > this.limit}`);
    console.log(key, " ", value);
  },
  obj3
);

console.log(result.result(3));
