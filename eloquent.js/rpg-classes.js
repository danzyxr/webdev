// Playing with multiple objects & stuffs
// I always wanted to create a RPG system!

let Warrior = {
  level: 1,
  profession: "Warrior",
  base_stats: [45, 40, 15],
  base_skills: ["Omnislash", "Berserker's Rage", "War Cry"],
  stat_gain: [4.5, 4.0, 1.5],
  name: ""
};

let Assassin = {
  level: 1,
  profession: "Assassin",
  base_stats: [20, 55, 25],
  base_skills: ["Longshot", "Venomous Bite", "Double Daggers"],
  stat_gain: [2.0, 5.5, 2.5],
  name: ""
};

let Paladin = {
  level: 1,
  profession: "Paladin",
  base_stats: [60, 20, 20],
  base_skills: ["Wrath of God", "Divine Shield", "Shining Light"],
  stat_gain: [6.0, 2.0, 2.0],
  name: ""
};

let Warlock = {
  level: 1,
  profession: "Warlock",
  base_stats: [15, 20, 65],
  base_skills: ["Incinerate", "Summon Elemental", "Coldsnap"],
  stat_gain: [1.5, 2.0, 6.5],
  name: ""
};

console.log(Object.keys(Warlock));

function createCharacter(prof, name) {
  let newCharacter = {};
  Object.assign(newCharacter, prof);
  newCharacter.name = name;
  return newCharacter;
}

function skillUpChar(character) {
  let skill = "placeholder skill";
  console.log(`${character.name} has learned ${skill}!`);
}

function levelUpChar(character, levels) {
  for (let i = 0; i < levels; i++) {
    character.level += 1;
    if (character.level % 5 === 0) {
      skillUpChar(character);
    }
  }
  for (let i = 0; i < character.base_stats.length; i++) {
    character.base_stats[i] += character.stat_gain[i] * levels;
  }
}

let melkor = createCharacter(Warlock, "Archmage Melkor");
console.log(melkor);

levelUpChar(melkor, 13);
console.log(melkor);
