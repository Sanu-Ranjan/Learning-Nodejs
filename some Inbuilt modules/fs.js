const fs = require("node:fs");
let fileNames = [];
fs.readdir("./", (err, files) => {
  fileNames = files;
  console.log(fileNames);
});
