import {
  generateProgression, generateNum, toHideElem, round,
} from '../cli.js';

const gameProgression = () => {
  const progression = generateProgression(10);
  const pos = generateNum(0, 9);
  const result = progression[pos];
  const hiddenElemProg = toHideElem(pos, progression);
  const question = hiddenElemProg.join(' ');
  const isWin = round(question, result, 'number');
  return isWin;
};

export default gameProgression;
