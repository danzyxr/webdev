class MyEle extends HTMLElement {
  connectedCallback() {
    const btn = this.querySelector('button');
    btn.addEventListener('click', this.handleClick);
  }

  handleClick(e) {
    alert('Yo');
  }
}

window.customElements.define('my-ele', MyEle);
