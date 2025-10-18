import { expect, test, vi, describe } from 'vitest';
import { potConduir, comparador, positiuNegatiuOZero, trobarMaxim, parOImpar } from './ternaryOperator';

describe ('1.2 Ternary Operator', () => {
  test('Exercise 1: potConduir function', () => {
    expect(potConduir(1)).toBe('No pots conduir');
    expect(potConduir(18)).toBe('Pots conduir');
    expect(potConduir(21)).toBe('Pots conduir');
    expect(potConduir(5)).toBe('No pots conduir');
  });

  test('Exercise 2: number comparator function', () => {
    expect(comparador(1, 4)).toBe('num2 es mes gran');
    expect(comparador(2, 4)).toBe('num2 es mes gran');
    expect(comparador(13, 4)).toBe('num1 es mes gran');
    expect(comparador(0, 0)).toBe('num2 es mes gran');
  });

  describe('Exercise 3: positiuNegatiuOZero and trobarMaxim', () => {
    test('positiuNegatiuOZero function', () => {
      expect(positiuNegatiuOZero(-1)).toBe('negatiu');
      expect(positiuNegatiuOZero(2)).toBe('positiu');
      expect(positiuNegatiuOZero(0)).toBe('zero');
    });

    test('trobarMaxim function', () => {
      expect(trobarMaxim(1,2,3)).toBe(3);
      expect(trobarMaxim(100,2,30)).toBe(100);
      expect(trobarMaxim(20,21,13)).toBe(21);
      expect(trobarMaxim(0.1,5.4,-3)).toBe(5.4);
    });
  })

  test('Exercise 4: parOImpar function', () => {
    const consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    const numbers = [12, 5, 79, 103, 88];
    
    parOImpar(numbers);
    
    expect(consoleLogMock).toHaveBeenCalledWith('El número 12 es parell');
    expect(consoleLogMock).toHaveBeenCalledWith('El número 5 es imparell');
    expect(consoleLogMock).toHaveBeenCalledWith('El número 79 es imparell');
    expect(consoleLogMock).toHaveBeenCalledWith('El número 103 es imparell');
    expect(consoleLogMock).toHaveBeenCalledWith('El número 88 es parell');
    
    consoleLogMock.mockReset();
  });

})


