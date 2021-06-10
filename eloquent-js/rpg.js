const Warlock = {
  level: 1,
  profession: 'Warlock',
  base_stats: [15, 20, 65],
  base_skills: ['Incinerate', 'Summon Elemental', 'Coldsnap'],
  stat_gain: [1.5, 2.0, 6.5],
  name: ''
};

console.log(Object.keys(Warlock));

function createCharacter(prof, name) {
  const newCharacter = Object.assign({}, prof);
  newCharacter.name = name;
  return newCharacter;
}

function skillUpChar(character) {
  const skill = 'placeholder skill';
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

const melkor = createCharacter(Warlock, 'Archmage Melkor');
console.log(melkor);

levelUpChar(melkor, 13);
console.log(melkor);
