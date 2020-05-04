import readlineSync from 'readline-sync';
import {
  generateNum, isEven,
} from '../cli.js';

const gameEven = () => {
  const num = generateNum(0, 100);
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer:');
  if (isEven(num) === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven(num)}"`);
  return false;
};

export default gameEven;
