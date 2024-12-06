const each = require("underscore/cjs/each.js");
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
