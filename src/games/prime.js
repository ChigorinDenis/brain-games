import { generateNum, makeData } from '../utils.js';
import playGame from '../index.js';

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const limit = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= limit; i += 1) {
    if (!(num % i)) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
  const question = generateNum(1, 100);
  const result = isPrime(question) ? 'yes' : 'no';
  return makeData(question, result);
};

export default () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  playGame(generateGameData, gameDescription);
};
