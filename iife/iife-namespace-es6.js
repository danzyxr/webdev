var globalData = globalData || {};

globalData.asdf = 'asdf';

const myNamespace = {};

myNamespace.foo = function (arg) {
  const privateData = 'secret';
  const publicData = {
    secret: privateData,
    extras: [42, 420, 69]
  };

  publicData.extras.push(arg);

  return publicData;
};

console.log(myNamespace.foo(globalData));

export default myNamespace;
