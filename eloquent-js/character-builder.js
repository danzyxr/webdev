class Character {
  constructor(lvl = 1, prof = 'Novice', stats = [10 / 3, 10 / 3, 10 / 3], skills = ['Runaway']) {
    this.level = lvl;
    this.profession = prof;
    this.stat_gain = stats;
    this.stat_gain = this.stat_gain.map((n) => n * (10 / this.stat_gain.reduce((a, c) => a + c)));
    this.base_stats = this.stat_gain.map((n) => n * this.level);
    this.base_skills = skills;
  }
}

const pally = new Character(99, 'Paladin', [16, 4, 4], ['Wrath']);
console.log(pally);

const warrior = new Character(999, 'Warrior', [13, 9, 7], ['Double Edge']);
console.log(warrior);

console.log(warrior.stat_gain.reduce((a, c) => a + c));
console.log(Math.floor(warrior.stat_gain.reduce((a, c) => a + c)));

console.log(warrior.base_stats.reduce((a, c) => a + c));
console.log(Math.floor(warrior.base_stats.reduce((a, c) => a + c)));

const noob = new Character();
console.log(noob);
