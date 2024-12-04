const os = require("node:os");
let mem = os.freemem();
let totalmem = os.totalmem();
console.log(
  `total memory is ${totalmem / 1024 ** 2} free memory is ${mem / 1024 ** 2}`
);
