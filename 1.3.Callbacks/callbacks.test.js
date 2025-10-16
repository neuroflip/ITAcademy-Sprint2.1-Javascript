import { expect, test, vi, describe, afterAll, beforeAll } from 'vitest';
import { processar, calculadora, esperarISaludar, processarElements, processarCadena } from './callbacks';

describe ('1.3 Callbacks', () => {
  const consoleLogMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);

  beforeAll(() => {
    vi.useFakeTimers();
  })

  afterAll(() => {
    consoleLogMock.mockReset();
     vi.useRealTimers();
  });

  test('Exercise 1: processar function', () => {
    processar(200, console.log);

    expect(consoleLogMock).toHaveBeenCalledWith(200);
  });

  test('Exercise 2: calculadora function', () => {
    const callback = (a, b)=> a + b;
    const result1 = calculadora(5, 190, callback);
    const result2 = calculadora(4, 6, callback);
    const result3 = calculadora(-12, 0, callback);

    expect(result1).toBe(195);
    expect(result2).toBe(10);
    expect(result3).toBe(-12);
  });

  test('Exercise 3: esperaISaludar function', () => {
    esperarISaludar('Jose', console.log);
    vi.advanceTimersByTime(3000);

    expect(consoleLogMock).toHaveBeenCalledWith('Jose');
  });

  test('Exercise 4: processarElements function', () => {
    const numbers = [0,1,2,3,4,5,6,7,8,9];

    processarElements(numbers, console.log);

    for (let i=0; i<numbers.length; i++ ) {
      expect(consoleLogMock).toHaveBeenCalledWith(numbers[i]);
    }
  });

  test('Exercise 5: processarCadena function', () => {
    processarCadena('Jose Angel', console.log);

    expect(consoleLogMock).toHaveBeenCalledWith('JOSE ANGEL')
  });
})

