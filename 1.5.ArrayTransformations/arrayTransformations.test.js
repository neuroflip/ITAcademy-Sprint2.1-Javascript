import { expect, test, describe } from 'vitest';
import { squaredArray, onlyEventNumbersFromArray, onlyNumbersGreaterThanTen, sumArrayWithReduce, oneLineOperation, someNumberFromArrayGreaterThanTen, everyNumberFromArrayGreaterThanTen } from './arrayTransformations';

describe ('1.5 Array transformations', () => {
  test('Exercise 1: squared array', () => {
    const result = squaredArray([0, 1, 2, 3, 4]);

    expect(result).toStrictEqual([0, 1, 4, 9, 16]);
  });

  test('Exercise 2: get only even numbers from array', () => {
    const result = onlyEventNumbersFromArray([1, 2, 3, 4]);

    expect(result).toStrictEqual([2,4]);
  });

  test('Exercise 3: First number greater than 10 in array', () => {
    const array = [1, 10 , 8, 11];
    const result = onlyNumbersGreaterThanTen(array);

    expect(result).toBe(11);
  })

  test('Exercise 4: Total sum with reduce', () => {
    const array = [13, 7, 8, 21];
    const result = sumArrayWithReduce(array);

    expect(result).toBe(49);
  })

  test('Exercise 5: one line complex operation', () => {
    const array = [1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9];
    const result = oneLineOperation(array);

    expect(result).toBe(130);
  })

  test('Exercise 6: every/some usage', () => {    
    const array = [11, 12, 13, 14];
    const every = everyNumberFromArrayGreaterThanTen(array);
    const some = someNumberFromArrayGreaterThanTen(array);

    expect(every).toBeTruthy();
    expect(some).toBeTruthy();
  })
})

