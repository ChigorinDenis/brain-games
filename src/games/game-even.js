import { generateNum, cons } from '../cli.js';
import engine from '../index.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};


const initializeGame = () => {
  const num = generateNum(0, 100);
  const result = isEven(num);
  return cons(num, result);
};


export default () => {
  const msg = 'Answer "yes" if the number is even, otherwise answer "no"';
  engine(initializeGame, msg);
};
