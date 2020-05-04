import readlineSync from 'readline-sync';
import {
  generatePair, generateSign, action, getFirstElem, getSecondElem,
} from '../cli.js';


const gameCalc = () => {
  const sign = generateSign();
  const pair = generatePair();
  const a = getFirstElem(pair);
  const b = getSecondElem(pair);
  const result = action(a, b, sign);
  const question = `${a} ${sign} ${b}`;
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer:');
  if (result === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}"`);
  return false;
};

export default gameCalc;
