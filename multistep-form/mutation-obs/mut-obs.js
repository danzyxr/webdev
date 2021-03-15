console.clear();

const add = document.querySelector('#add-input');
const btn = document.querySelector('#btn-input');
const log = document.querySelector('#log-input');

console.log(add);
console.log(btn);
console.log(log);

btn.onclick = function() {
  if (add.value) {
    const p = document.createElement('p');
    p.innerHTML = add.value;
    log.append(p);
  }
};

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutated) => {
    const target = mutated.target;
    target.querySelectorAll('p').forEach((p) => {
      if (!p.classList.contains('border')) {
        p.classList.toggle('border');
      }
    });
  });
}).observe(log, {
  childList: true,
  attributes: false,
  subtree: false
});
