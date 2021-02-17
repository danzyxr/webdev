// Looping a triangle

let hash = "#";
for (let i = 0; i < 7; i++) {
  console.log(hash);
  hash += "#";
}

// Triangle w/ string.length

for (let muns = "$"; muns.length < 7; muns += "$") {
  console.log(muns);
}

// Triangle w/ while loop

let star = "*";
while (true) {
  if (star.length > 7) {
    break;
  }
  console.log(star);
  star += "*";
}
