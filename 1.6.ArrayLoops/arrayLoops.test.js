import { expect, test, describe, vi, afterEach, afterAll } from 'vitest';
import { forEachPrintNames, forOfPrintNames, filterEvenNumbersFromArray, forInPrintObject } from './arrayLoops';

describe ('1.6 Array Loops', () => {
  const consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);

  afterEach(() => {
    consoleLogMock.mockClear();
  });

  afterAll(() => {
    consoleLogMock.mockRestore();
  })

  test('Exercise 1: print names from array using forEach', () => {
    const names = ['Anna', 'Bernat', 'Clara'];
    forEachPrintNames(names);

    expect(consoleLogMock).toHaveBeenCalledWith('Anna');
    expect(consoleLogMock).toHaveBeenCalledWith('Bernat');
    expect(consoleLogMock).toHaveBeenCalledWith('Clara');
  });

  test('Exercise 2: print names from array using for of', () => {
    const names = ['Anna', 'Bernat', 'Clara'];
    forOfPrintNames(names);

    expect(consoleLogMock).toHaveBeenCalledWith('Anna');
    expect(consoleLogMock).toHaveBeenCalledWith('Bernat');
    expect(consoleLogMock).toHaveBeenCalledWith('Clara');
  });

  test('Exercise 3: get event numbers from array using filter', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = filterEvenNumbersFromArray(array);

    expect(result).toStrictEqual([2, 4, 6]);
  })

  test('Exercise 4: print object using for in', () => {
    const object = { 
      nom: 'Ona',
      edat: 25,
      ciutat: 'Barcelona'
    }; 
    forInPrintObject(object);

    expect(consoleLogMock).toHaveBeenCalledWith('nom: Ona');
    expect(consoleLogMock).toHaveBeenCalledWith('edat: 25');
    expect(consoleLogMock).toHaveBeenCalledWith('ciutat: Barcelona');
  })

})

