import {
  generateNum, isEven, round,
} from '../cli.js';

const gameEven = () => {
  const num = generateNum(0, 100);
  const result = isEven(num);
  const isWin = round(num, result);
  return isWin;
};

export default gameEven;
