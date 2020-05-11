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

const gameInit = () => {
  const f = () => {
    const num = generateNum(1, 101);
    const result = isPrime(num) ? 'yes' : 'no';
    return cons(num, result);
  };
  return f;
};

export default () => {
  const msg = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const init = gameInit();
  engine(init, msg);
};
