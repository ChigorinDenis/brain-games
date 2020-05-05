import readlineSync from 'readline-sync';
import {
  generatePair, getFirstElem, getSecondElem, gcd,
} from '../cli.js';

const gameGcd = () => {
  const pair = generatePair();
  const a = getFirstElem(pair);
  const b = getSecondElem(pair);
  const result = gcd(a, b);
  const question = `${a} ${b}`;
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer:');
  if (result === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}"`);
  return false;
};

export default gameGcd;
