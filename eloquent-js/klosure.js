const counter = function counter(n = 0) {
  let count = n;
  return {
    getCount: function getCount() {
      return count;
    },
    increment: function increment() {
      count += 1;
    }
  };
};

const c = counter();
console.log(c.getCount());
c.increment();
console.log(c.getCount());
