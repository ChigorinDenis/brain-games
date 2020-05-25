export const generateNum = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const makeData = (a, b) => ([a, b]);

export const getQuestion = (pair) => {
  const [a] = pair;
  return a;
};

export const getAnswer = (pair) => {
  const [, b] = pair;
  return b;
};
