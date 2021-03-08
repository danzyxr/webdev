console.log('asdf');
setTimeout(function () {
  console.log('timeout');
}, 1000);
console.log('qwerty');

const getPosts = (resrc) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('Error getting resource!');
      }
    });

    request.open('GET', resrc);
    request.send();
  });
};

console.log(1);
console.log(2);

const dummy = 'https://jsonplaceholder.typicode.com/posts';
const moreData = 'https://jsonplaceholder.typicode.com/todos';
const oops = 'https://jsonplaceholder.typicode.com/todos/asdf';

getPosts(dummy)
  .then((data) => {
    console.log('Promise 1 resolved:', data);
    return getPosts(moreData);
  })
  .then((data) => {
    console.log('Promise 2 resolved:', data);
    return getPosts(oops);
  })
  .then((data) => {
    console.log('Promise 3 resolved:', data);
  })
  .catch((error) => {
    console.log('Promise rejected:', error);
  });

console.log(3);
console.log(4);

const getAnything = () => {
  return new Promise((resolve, reject) => {
    resolve('some data');
    reject('some error');
  });
};

getAnything()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
