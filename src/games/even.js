import { generateNum, makeData } from '../utils.js';
import launchEngine from '../index.js';

const isEven = (num) => (num % 2 === 0);

const generateDataGame = () => {
  const question = generateNum(0, 100);
  const result = isEven(question) ? 'yes' : 'no';
  return makeData(question, result);
};

export default () => {
  const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no"';
  launchEngine(generateDataGame, descriptionGame);
};
