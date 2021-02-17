// O(3)

function sumUpTo_v1(n) {
  return (n * (n + 1)) / 2;
}

// O(n)

function sumUpTo_v2(n) {
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += i;
  }

  return sum;
}

// O(n^2)

function pairs_v1(arr) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }

  return pairs;
}

function pairs_v2(arr) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      pairs.push([arr[i], arr[j]]);
    }
  }

  let unique = [];

  pairs.forEach((subArr) => {
    let s = new Set(subArr.sort());
    if (s.size !== 1) {
      unique.push(s);
    }
  });

  return new Set(unique); // Wow, doesn't work!
}

// O(n * m)

function pairs_v3(arr1, arr2) {
  let pairs = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      pairs.push([arr1[i], arr2[j]]);
    }
  }
  return pairs;
}

let arr1 = ["asdf", "qwerty", 42];
let arr2 = ["red", "blue", "green"];

console.log(pairs_v1(arr1));
console.log(pairs_v2(arr1));
console.log(pairs_v3(arr1, arr2));
