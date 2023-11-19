export default function sorting(players) {
  const key = 'health';
  return players.sort((player1, player2) => player2[key] - player1[key]);
}

// [
//   {name: 'мечник', health: 10},
//   {name: 'маг', health: 100},
//   {name: 'лучник', health: 80},
// ]
