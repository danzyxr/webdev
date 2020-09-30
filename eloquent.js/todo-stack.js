// A todo stack

let todoStack = [];
function remember(task) {
  todoStack.push(task);
}
function getTask() {
  return todoStack.shift();
}
function rememberUrgently(task) {
  todoStack.unshift(task);
}
