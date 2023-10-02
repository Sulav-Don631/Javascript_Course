const game = {
  team1: "Bayern Munich",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  team2: "Borrussia Dortmund",

  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Coding Challenge 1
/*
const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const player1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(player1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals("Davis", "Muler", "Lewandowski", "Kimmich");
printGoals(...game.scored);

team1 < team2 && console.log(`Team1 is more likely to win`);


//Coding Challenge 2
for (const [key, values] of game.scored.entries()) {
  console.log(`Goal ${key + 1}: ${values}`);
}

let tot = 0;
const entry = Object.entries(game.odds);
for (const [key, values] of entry) {
  tot = +values;
}
const avg = tot / entry.length;
console.log(avg);

for (const [key, values] of Object.entries(game.odds)) {
  const teamStr = key === "x" ? "draw " : `Victory ${game[key]}`;
  console.log(`Odd of ${teamStr} : ${values}`);
}
const scorred = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};
const newGame = { ...game, scorred };
console.log(newGame);
*/

//Coding Challenge 3
const gameEvents = new Map([
  [17, "Goal"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [61, "Yellow Card"],
  [69, "Red Card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow Card"],
]);

const newEvent = new Set([...gameEvents.values()]);
console.log(newEvent);

gameEvents.delete(64);
console.log(gameEvents);

for (const [key, event] of gameEvents) {
  console.log(`An ${event} happend,on average every 9 minutes`);
}

for (const [key, value] of gameEvents) {
  key < 45
    ? console.log(`[First Half]${key} : ${value}`)
    : console.log(`[Seond Half]${key} : ${value}`);
}
