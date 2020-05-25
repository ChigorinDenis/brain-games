import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './utils.js';

const startRound = (question, computedAnswer) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer:');
  if (computedAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${computedAnswer}"`);
  return false;
};

const launchEngine = (dataGame, descriptionGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  const numRounds = 3;
  console.log(descriptionGame);
  for (let i = 0; i < numRounds; i += 1) {
    const data = dataGame();
    const question = getQuestion(data);
    const computedAnswer = getAnswer(data);
    const check = startRound(question, computedAnswer);
    if (!check) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default launchEngine;
