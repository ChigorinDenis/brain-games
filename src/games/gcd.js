import { generateNum, cons } from '../cli.js';
import engine from '../index.js';

const gcd = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a > b) {
    return gcd(a - b, b);
  }
  return gcd(a, b - a);
};

const generateGameData = () => {
  const a = generateNum(0, 100);
  const b = generateNum(0, 100);
  const result = gcd(a, b);
  const question = `${a} ${b}`;
  return cons(question, result.toString());
};

export default () => {
  const msg = 'Find the greatest common divisor of given numbers.';
  engine(generateGameData, msg);
};
