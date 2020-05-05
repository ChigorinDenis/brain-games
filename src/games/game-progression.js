import readlineSync from 'readline-sync';
import {
  generateProgression, generateNum, toHideElem,
} from '../cli.js';

const gameProgression = () => {
  const progression = generateProgression(10);
  const pos = generateNum(0, 9);
  const result = progression[pos];
  const hiddenElemProg = toHideElem(pos, progression);
  const question = hiddenElemProg.join(' ');
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer:');
  if (result === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}"`);
  return false;
};

export default gameProgression;
