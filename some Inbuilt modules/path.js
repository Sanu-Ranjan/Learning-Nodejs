const path = require("node:path");
let pathObj = path.parse(__filename);
console.log(pathObj);
path.parse("/home/user/dir/file.txt");
// Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
