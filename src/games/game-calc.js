import { generateNum, cons } from '../cli.js';
import engine from '../index.js';

const generateSign = () => {
  const operations = '+-*';
  return operations[generateNum(0, operations.length - 1)];
};

const calculate = (a, b, sign) => {
  const actions = {
    '+': () => (a + b),
    '-': () => (a - b),
    '*': () => (a * b),
  };
  return actions[sign]();
};

const initializeGame = () => {
  const sign = generateSign();
  const a = generateNum(0, 100);
  const b = generateNum(0, 100);
  const result = calculate(a, b, sign);
  const question = `${a} ${sign} ${b}`;
  return cons(question, result.toString());
};

export default () => {
  const msg = 'What is the result of the expression?';
  engine(initializeGame, msg);
};
