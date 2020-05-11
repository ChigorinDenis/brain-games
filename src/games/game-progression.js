import { generateNum, cons } from '../cli.js';
import engine from '../index.js';

const generateProgression = (n) => {
  const a = generateNum(1, 100);
  const d = generateNum(1, 10);
  const progression = [];
  for (let i = 0; i < n; i += 1) {
    const elem = a + i * d;
    progression.push(elem);
  }
  return progression;
};

const toHideElem = (pos, arr) => {
  const copy = [...arr];
  copy.splice(pos, 1, '..');
  return copy;
};

const gameInit = () => {
  const f = () => {
    const progression = generateProgression(10);
    const pos = generateNum(0, 9);
    const result = progression[pos];
    const hiddenElemProg = toHideElem(pos, progression);
    const question = hiddenElemProg.join(' ');
    return cons(question, result);
  };
  return f;
};

export default () => {
  const msg = 'What number is missing in the progression?';
  const init = gameInit();
  engine(init, msg);
};
