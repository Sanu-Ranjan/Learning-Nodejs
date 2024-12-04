const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  console.log("an event occurred!");
});

add(3, 2);

function add(num1, num2) {
  myEmitter.emit("event");
  return num1 + num2;
}
