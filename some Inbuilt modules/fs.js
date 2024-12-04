const fs = require("node:fs");
fs.readdir("./", (err, files) => {
  console.log(files);
});
