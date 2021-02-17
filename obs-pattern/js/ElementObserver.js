class ElementObserver {
  constructor(ele) {
    this.ele = document.getElementById(ele);
  }

  update(model) {
    this.ele.innerHTML = model.number;
    this.ele.style.backgroundColor = model.color;
  }
}
