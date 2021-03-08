// Array slicing and other things

console.log([1, 2, 3, 2, 1].indexOf(2, 1));
console.log([1, 2, 3, 2, 1].lastIndexOf(2, 3));
console.log([0, 1, 2, 3, 4].slice(2, 4));
console.log([0, 1, 2, 3, 4].slice(2));

function remove(arr, idx) {
  return arr.slice(0, idx).concat(arr.slice(idx + 1));
}

console.log(remove(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 2));
console.log('Alice'.indexOf('c'));
console.log('one two three'.indexOf('ee'));
console.log('Coconuts'.slice(4, 7));
console.log('Coconuts'.slice(4));
console.log(' \n \n \n Ok \n \n \n '.trim());
console.log(String(7).padStart(3, '0'));

const sentence = 'Secretarybirds specialize in stomping';
const words = sentence.split(' ');

console.log(words);
console.log(words.join(' '));
console.log('la'.repeat(3));

function max(...numbers) {
  let result = -Infinity;
  for (const n of numbers) {
    if (n > result) result = n;
  }
  return result;
}

console.log(max(1, 3, 9, 27));

const asdf = ['will', 'never', 'fully'];
console.log('I', ...asdf, 'understand.');
