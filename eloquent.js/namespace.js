// N A M E S P A C E

const namespace = namespace || {};
namespace.prop = "42";
namespace.foobar = function (arg) {
  console.log(arg);
};

with (namespace) {
  foobar(namespace.prop);
}

// start & stop are
// under namespace => car

const car = {
  start: () => {
    console.log("start");
  },
  stop: () => {
    console.log("stop");
  }
};

car.start();
car.stop();

const toyota = {};
Object.assign(toyota, car);
toyota.neverBreak = true;
console.log(toyota);

const boat = {};
boat.start = () => {
  console.log("start");
};
boat.stop = () => {
  console.log("stop");
};

boat.start();
boat.stop();
