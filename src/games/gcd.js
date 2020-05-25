import { generateNum, makeData } from '../utils.js';
import launchEngine from '../index.js';

const gcd = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a > b) {
    return gcd(a - b, b);
  }
  return gcd(a, b - a);
};

const generateDataGame = () => {
  const a = generateNum(0, 100);
  const b = generateNum(0, 100);
  const result = gcd(a, b);
  const question = `${a} ${b}`;
  return makeData(question, result.toString());
};

export default () => {
  const descriptionGame = 'Find the greatest common divisor of given numbers.';
  launchEngine(generateDataGame, descriptionGame);
};
