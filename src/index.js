import readlineSync from 'readline-sync';
import { greeting, car, cdr } from './cli.js';

const round = (question, computed) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer:');
  const typedAnswer = typeof computed === 'number' ? Number(answer) : answer;
  if (computed === typedAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${computed}"`);
  return false;
};

const engine = (gameInit, msg) => {
  const user = greeting();
  const n = 3;
  let i;
  console.log(msg);
  for (i = 0; i < n; i += 1) {
    const init = gameInit();
    const question = car(init);
    const computed = cdr(init);
    const check = round(question, computed);
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

export default engine;
