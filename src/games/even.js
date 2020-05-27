import { generateNum, makeData } from '../utils.js';
import playGame from '../index.js';

const isEven = (num) => (num % 2 === 0);

const generateGameData = () => {
  const question = generateNum(0, 100);
  const result = isEven(question) ? 'yes' : 'no';
  return makeData(question, result);
};

export default () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';
  playGame(generateGameData, gameDescription);
};
