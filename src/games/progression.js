import { generateNum, makeData } from '../utils.js';
import playGame from '../index.js';

const generateArithmeticProgression = (firstMember, delta, lengthProgression) => {
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    const member = firstMember + i * delta;
    progression.push(member);
  }
  return progression;
};

const hideElement = (position, arr) => {
  const copy = [...arr];
  copy.splice(position, 1, '..');
  return copy;
};

const generateGameData = () => {
  const firstMember = generateNum(1, 100);
  const delta = generateNum(1, 10);
  const lengthProgression = 10;
  const progression = generateArithmeticProgression(firstMember, delta, lengthProgression);
  const position = generateNum(0, progression.length - 1);
  const result = progression[position];
  const question = hideElement(position, progression).join(' ');
  return makeData(question, result.toString());
};

export default () => {
  const gameDescription = 'What number is missing in the progression?';
  playGame(generateGameData, gameDescription);
};
