import { generateNum, cons } from '../cli.js';
import engine from '../index.js';

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  const limit = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= limit; i += 1) {
    if (!(num % i)) {
      return false;
    }
  }
  return true;
};


const initializeGame = () => {
  const num = generateNum(1, 100);
  const result = isPrime(num) ? 'yes' : 'no';
  return cons(num, result);
};

export default () => {
  const msg = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  engine(initializeGame, msg);
};
