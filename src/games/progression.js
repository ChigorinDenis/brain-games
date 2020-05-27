import { generateNum, makeData } from '../utils.js';
import playGame from '../index.js';

const generateArithmeticProgression = (a, d, n) => {
  const progression = [];
  for (let i = 0; i < n; i += 1) {
    const elem = a + i * d;
    progression.push(elem);
  }
  return progression;
};

const hideElement = (position, arr) => {
  const copy = [...arr];
  copy.splice(position, 1, '..');
  return copy;
};

const generateGameData = () => {
  const startProgression = generateNum(1, 100);
  const delta = generateNum(1, 10);
  const lengthProgression = 10;
  const progression = generateArithmeticProgression(startProgression, delta, lengthProgression);
  const position = generateNum(0, progression.length - 1);
  const result = progression[position];
  const question = hideElement(position, progression).join(' ');
  return makeData(question, result.toString());
};

export default () => {
  const gameDescription = 'What number is missing in the progression?';
  playGame(generateGameData, gameDescription);
};
