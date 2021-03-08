const body = document.body;
body.append('Hello, World.', '\nBye!');

const div = document.createElement('div');
div.innerHTML = `<strong>YOOO!</strong>`;
body.append(div);

const myDiv = document.querySelector('#myDiv');
console.log(myDiv.textContent);
console.log(myDiv.innerText);

const strong = document.createElement('strong');
strong.className = 'delete-me';
strong.innerText = '\nStronger...';
div.append(strong);
div.remove(strong);

const mySpan = document.querySelector('#abc');

console.log(mySpan.title);
mySpan.removeAttribute('title');

console.log(mySpan.id);
console.log(mySpan.getAttribute('id'));

mySpan.setAttribute('id', 'your-id');
console.log(mySpan.id);

console.log(mySpan.dataset);

console.log(mySpan.getAttribute('data-foo'));
console.log(mySpan.getAttribute('data-asdf'));
console.log(mySpan.dataset.foo);
console.log(mySpan.dataset.asdf);

mySpan.dataset.newProp = 'nice';
console.log(mySpan.dataset.newProp);

console.log(mySpan.dataset);

mySpan.classList.add('c3');
mySpan.classList.remove('c3');

console.log('\n');
console.log(mySpan.classList);
mySpan.classList.toggle('c3');
console.log(mySpan.classList);

console.log('\n');
console.log(mySpan.classList);
mySpan.classList.toggle('c3', false);
console.log(mySpan.classList);

console.log('\n');
console.log(mySpan.classList);
mySpan.classList.toggle('c3', true);
console.log(mySpan.classList);
