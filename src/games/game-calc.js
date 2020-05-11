import { generateNum, cons } from '../cli.js';
import engine from '../index.js';

const generateSign = () => {
  const operations = '+-*';
  return operations[generateNum(0, 2)];
};

const action = (a, b, sign) => {
  const actions = {
    '+': () => (a + b),
    '-': () => (a - b),
    '*': () => (a * b),
  };
  return actions[sign]();
};

const gameInit = () => {
  const f = () => {
    const sign = generateSign();
    const a = generateNum(0, 100);
    const b = generateNum(0, 100);
    const result = action(a, b, sign);
    const question = `${a} ${sign} ${b}`;
    return cons(question, result);
  };
  return f;
};

export default () => {
  const msg = 'What is the result of the expression?';
  const init = gameInit();
  engine(init, msg);
};
