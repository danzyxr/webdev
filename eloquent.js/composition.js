const g = (n) => n + 1;
const f = (n) => n * 2;

const composer = (f, g, x) => {
  return f(g(x));
};

console.log(composer(f, g, 20));

Promise.resolve(20)
  .then(g)
  .then(f)
  .then((x) => console.log(x));

const trace = (label) => (value) => {
  console.log(`${label} : ${value}`);
  return value;
};

const pipeline = (...fns) => (x) => fns.reduce((y, f) => f(y), x);
