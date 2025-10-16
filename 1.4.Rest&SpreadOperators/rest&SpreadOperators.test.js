import { expect, test, describe, vi } from 'vitest';
import { exercise1SpreadArrays, suma, spreadInObjects, restInDestructing, spreadInFunctions, objectFusion } from './rest&SpreadOperators';

describe ('1.4 Rest & Spread operators', () => {
  test('Exercise 1: spread operator in arrays', () => {
    const result = exercise1SpreadArrays([0, 1, 2, 3, 4], [5, 6, 7, 8, 9]);

    expect(result).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('Exercise 2: suma function', () => {
    const result1 = suma(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    const result2 = suma(34, 45, -34, -45);

    expect(result1).toBe(45);
    expect(result2).toBe(0);
  });

  test('Exercise 3: Spread in objects', () => {
    const object1 = [0,1,2,3,4];
    const object2 = spreadInObjects(object1);

    expect(object2).toStrictEqual(object1);

    object2[0] = 100;

    expect(object2).not.toStrictEqual(object1);
    expect(object2[0]).toBe(100);
  })

  test('Exercise 4: Rest in destructing', () => {
    const array = [0,1,2,3,4];
    const [elem1, elem2, rest] = restInDestructing(array);

    expect(elem1).toBe(0);
    expect(elem2).toBe(1);
    expect(rest).toStrictEqual([2,3,4]);
  })

  test('Exercise 5: Spread in functions', () => {
    const consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const params = [0,1,2];
    
    spreadInFunctions(...params);

    expect(consoleLogMock).toHaveBeenCalledWith('0 1 2');

    consoleLogMock.mockReset();
  })

  test('Exercise 6: opbject fusion with spread', () => {    
    const obj1 = {
      a: 'a',
      b: 'b',
      c: 'c',
    }, obj2 = {
      d: 'd',
      e: 'e',
      f: 'f',
    },
    expectedResult = {
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd',
      e: 'e',
      f: 'f',
    }

    const result = objectFusion(obj1, obj2);

    expect(result).toStrictEqual(expectedResult);
  })
})

