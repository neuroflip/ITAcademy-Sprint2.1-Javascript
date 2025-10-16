import { expect, test, vi, describe, afterAll, beforeAll } from 'vitest';
import { add, randomNumber, Person, printNumbers, printMessage } from './arrowFuntions';

describe ('1.1 Arrow functions', () => {
  const consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);

  beforeAll(() => {
    vi.useFakeTimers();
  })

  afterAll(() => {
    consoleLogMock.mockReset();
     vi.useRealTimers();
  });

  test('Exercise 1: add arrow function', () => {
    expect(add(0,0)).toBe(0);
    expect(add(1, 2)).toBe(3);
    expect(add(100, 20)).toBe(120);
  });

  test('Exercise 2: random number', () => {
    for (let i=0; i<100; i++) {
      const result = randomNumber();

      expect(result).toBeGreaterThan(-1);
      expect(result).toBeLessThan(101);
    }
  });

  test('Exercise 3: this in arrow function', () => {
    const person1 = new Person('Jose');
    const person2 = new Person('Pedro');
    const person3 = new Person('Luis');
    
    person1.greet();
    person2.greet();
    person3.greet();

    expect(consoleLogMock).toHaveBeenCalledWith('Hola Jose');
    expect(consoleLogMock).toHaveBeenCalledWith('Hola Pedro');
    expect(consoleLogMock).toHaveBeenCalledWith('Hola Luis');
  });

  test('Exercise 4: arrow function in a loop, printNumbers', () => {
    const numbers = [1,2,3,4,5,6];

    printNumbers(numbers);

    for (let i=0; i< numbers.length; i++) {
      expect(consoleLogMock).toHaveBeenCalledWith(numbers[i]);
    }
  });

  test('Exercise 5: arrow function with setTimeout', async () => {
    printMessage();
    vi.advanceTimersByTime(4000);

    expect(consoleLogMock).toHaveBeenCalledWith('This is a message after 3 secons!');
  });
})

