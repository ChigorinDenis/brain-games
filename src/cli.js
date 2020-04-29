import readlineSync from 'readline-sync';

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const greeting = (name) => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hi, ${name}!`);
};

const generateNum = () => {
  const rand = Math.random() * (99 - 1);
  return Math.round(rand);
};

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const gameEven = (user) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let i;
  for (i = 0; i < 3; i += 1) {
    const num = generateNum();
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer:');
    if (isEven(num) === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven(num)}"`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${user}!`);
  } else {
    console.log(`Let's try again, ${user}`);
  }
};
