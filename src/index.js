import gameEven from './games/game-even.js';
import gameCalc from './games/game-calc.js';
import gameGcd from './games/game-gcd.js';
import gameProgession from './games/game-progression.js'
import { greeting } from './cli.js';

const games = {
  'brain-calc': {
    func: gameCalc,
    msg: 'What is the result of the expression?',
  },
  'brain-even': {
    func: gameEven,
    msg: 'Answer "yes" if the number is even, otherwise answer "no"',
  },
  'brain-gcd': {
    func: gameGcd,
    msg: 'Find the greatest common divisor of given numbers.',
  },
  'brain-progression': {
    func: gameProgession,
    msg: 'What number is missing in the progression?',
  },
};

const run = (gameName, n) => {
  const user = greeting();
  const game = games[gameName];
  let i;
  console.log(game.msg);
  for (i = 0; i < n; i += 1) {
    const check = game.func();
    if (!check) {
      break;
    }
  }
  if (i === n) {
    console.log(`Congratulations, ${user}!`);
  } else {
    console.log(`Let's try again, ${user}!`);
  }
};

export default run;
