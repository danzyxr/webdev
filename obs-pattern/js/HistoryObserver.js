class HistoryObserver {
  constructor() {
    this.colorHistory = [];
  }

  update(model) {
    let log = '';
    this.colorHistory.unshift(model.color);
    this.colorHistory.forEach((c) => (log += c));
    console.log(log);
  }
}
