fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    console.log('Resolved:', response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log('Rejected:', error);
  });
