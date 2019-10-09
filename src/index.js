import readlineSync from 'readline-sync';

const ask = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + name + '!');
};

export {ask};
