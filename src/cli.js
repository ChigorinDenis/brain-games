export const generateNum = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const cons = (a, b) => ([a, b]);
export const car = (pair) => {
  const [a] = pair;
  return a;
};
export const cdr = (pair) => {
  const [, b] = pair;
  return b;
};
