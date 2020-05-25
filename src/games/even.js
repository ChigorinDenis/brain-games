import { generateNum, cons } from '../cli.js';
import engine from '../index.js';

const isEven = (num) => (num % 2 === 0);

const generateGameData = () => {
  const question = generateNum(0, 100);
  const result = isEven(question) ? 'yes' : 'no';
  return cons(question, result);
};

export default () => {
  const msg = 'Answer "yes" if the number is even, otherwise answer "no"';
  engine(generateGameData, msg);
};
