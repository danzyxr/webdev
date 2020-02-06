var count = 0;
var state = "";

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
    default:
      break;
  }
  if (count > 0) {
    state = "Bet";
  } else {
    state = "Hold";
  }
  return count + " " + state;
}

cc(2);
cc(3);
cc(7);
cc('K');
cc('A');