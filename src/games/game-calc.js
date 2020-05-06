import {
  generatePair, generateSign, action, getFirstElem, getSecondElem, round,
} from '../cli.js';


const gameCalc = () => {
  const sign = generateSign();
  const pair = generatePair();
  const a = getFirstElem(pair);
  const b = getSecondElem(pair);
  const result = action(a, b, sign);
  const question = `${a} ${sign} ${b}`;
  const isWin = round(question, result, 'number');
  return isWin;
};

export default gameCalc;
