const getPosts = async (resrc) => {
  const response = await fetch(resrc);

  if (response.status !== 200) {
    throw new Error("Cannot fetch data!");
  }

  return await response.json();
};

console.log("1");
console.log("2");

getPosts("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log("Resolved:", data))
  .catch((error) => console.log("Rejected:", error));

console.log("3");
console.log("4");
