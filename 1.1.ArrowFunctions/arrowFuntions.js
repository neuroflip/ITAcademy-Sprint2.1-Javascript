
const add = (a, b) => a + b;
const randomNumber = () => Math.floor(Math.random() * 101);

class Person {
  constructor(name) {
    this.name = name;
  }

  greet = () => {
    console.log(`Hola ${this.name}`);
  }
}

const printNumbers = (numbers) => {
  for(let i=0; i< numbers.length; i++) {
    console.log(numbers[i]);
  }
}

const timeoutCallback = () => console.log('This is a message after 3 secons!');
const printMessage = () => {
  setTimeout(timeoutCallback, 3000);
}


export { add, randomNumber, Person, printNumbers, printMessage };
