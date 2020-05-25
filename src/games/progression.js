import { generateNum, makeData } from '../utils.js';
import launchEngine from '../index.js';

const generateProgression = (a, d, n) => {
  const progression = [];
  for (let i = 0; i < n; i += 1) {
    const elem = a + i * d;
    progression.push(elem);
  }
  return progression;
};

const hideElem = (position, arr) => {
  const copy = [...arr];
  copy.splice(position, 1, '..');
  return copy;
};

const generateDataGame = () => {
  const startProgression = generateNum(1, 100);
  const delta = generateNum(1, 10);
  const lengthProgression = 10;
  const progression = generateProgression(startProgression, delta, lengthProgression);
  const position = generateNum(0, progression.length - 1);
  const result = progression[position];
  const question = hideElem(position, progression).join(' ');
  return makeData(question, result.toString());
};

export default () => {
  const descriptionGame = 'What number is missing in the progression?';
  launchEngine(generateDataGame, descriptionGame);
};
