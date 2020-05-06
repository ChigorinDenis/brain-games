import {
  generatePair, getFirstElem, getSecondElem, gcd, round,
} from '../cli.js';

const gameGcd = () => {
  const pair = generatePair();
  const a = getFirstElem(pair);
  const b = getSecondElem(pair);
  const result = gcd(a, b);
  const question = `${a} ${b}`;
  const isWin = round(question, result, 'number');
  return isWin;
};

export default gameGcd;
