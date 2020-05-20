import readlineSync from 'readline-sync';
import { car, cdr } from './cli.js';

const round = (question, computed) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer:');
  if (computed === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${computed}"`);
  return false;
};

const engine = (initializeGame, msg) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  const n = 3;
  console.log(msg);
  for (let i = 0; i < n; i += 1) {
    const init = initializeGame();
    const question = car(init);
    const computed = cdr(init);
    const check = round(question, computed);
    if (!check) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
