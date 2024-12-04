const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on("event", (...args) => {
  console.log("an event occurred!" + args);
});

add(3, 2);

function add(num1, num2) {
  myEmitter.emit("event", "a", "b");
  return num1 + num2;
}
