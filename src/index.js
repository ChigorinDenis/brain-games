import readlineSync from 'readline-sync';
import { car, cdr } from './cli.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!`);
  return name;
};

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
  const user = greeting();
  const n = 3;
  console.log(msg);
  for (let i = 0; i < n; i += 1) {
    const init = initializeGame();
    const question = car(init);
    const computed = cdr(init);
    const check = round(question, computed);
    if (!check) {
      console.log(`Let's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratulations, ${user}!`);
};

export default engine;
