import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${name}!`);
  return name;
};

export const generateNum = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};


export const generateSign = () => {
  const operations = '+-*';
  return operations[generateNum(0, 2)];
};

export const generatePair = () => ([
  generateNum(0, 100),
  generateNum(0, 100),
]);

export const getFirstElem = (pair) => (pair[0]);
export const getSecondElem = (pair) => (pair[1]);

export const action = (a, b, sign) => {
  const actions = {
    '+': () => (a + b),
    '-': () => (a - b),
    '*': () => (a * b),
  };
  return actions[sign]();
};

export const gcd = (a, b) => {
  if (a === b) {
    return a;
  }
  if (a > b) {
    return gcd(a - b, b);
  }
  return gcd(a, b - a);
};

export const generateProgression = (n) => {
  const a = generateNum(1, 100);
  const d = generateNum(1, 10);
  const progression = [];
  for (let i = 0; i < n; i += 1) {
    const elem = a + i * d;
    progression.push(elem);
  }
  return progression;
};

export const toHideElem = (pos, arr) => {
  const copy = [...arr];
  copy.splice(pos, 1, '..');
  return copy;
};
