const f = (n) => n + 1;
const g = (n) => n * 2;

const composer = (fnA, fnB, x) => {
  return fnA(fnB(x));
};

console.log(composer(f, g, 20));

Promise.resolve(20)
  .then(f)
  .then(g)
  .then((x) => console.log(x));

const trace = (label) => (value) => {
  console.log(`${label} : ${value}`);
  return value;
};

const pipeline = (...fns) => (x) => fns.reduce((y, f) => f(y), x);
