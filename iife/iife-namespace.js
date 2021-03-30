var globalData = globalData || {};

globalData.asdf = 'asdf';

var myNamespace = myNamespace || {};

myNamespace.foo = (function (arg) {
  const privateData = 'secret';
  const publicData = {
    secret: privateData,
    extras: [42, 420, 69]
  };

  publicData.extras.push(arg);

  return publicData;
})(globalData.asdf);

console.log(myNamespace.foo);
