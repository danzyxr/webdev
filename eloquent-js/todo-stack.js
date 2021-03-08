// A todo stack

const todoStack = [];

function remember(task) {
  todoStack.push(task);
}

function getTask() {
  return todoStack.shift();
}

function rememberUrgently(task) {
  todoStack.unshift(task);
}

remember('clean room');
remember('read chapter five');
remember('complete taxes');
rememberUrgently('oil change');

console.log(todoStack);
console.log(getTask());
console.log(todoStack);
