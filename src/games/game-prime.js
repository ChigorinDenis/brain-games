import { isPrime, generateNum, round } from '../cli.js';

const gamePrime = () => {
  const num = generateNum(1, 101);
  const result = isPrime(num) ? 'yes' : 'no';
  const isWin = round(num, result);
  return isWin;
};

export default gamePrime;
