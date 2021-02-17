class Creature {
  constructor(attack = 1, defense = 1, flags = {}) {
    this.attack = attack;
    this.defense = defense;
    this.flags = flags;
  }
  printStats() {
    return `${this.attack}, ${this.defense}, ${Object.keys(this.flags)}`;
  }
}

let pikablue = new Creature(3, 3, { flying: true });

console.log(pikablue.printStats());

pikablue.flags.deathtouch = true;

console.log(pikablue.printStats());
